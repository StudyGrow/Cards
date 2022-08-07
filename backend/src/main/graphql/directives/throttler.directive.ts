import { NextFn, ResolverData } from "type-graphql";
import { Request, Response } from "express";
import RedisClientInstance from "../../../infrastructure/db/redis/redis.client";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { TooManyRequestsError } from "../../../response/errors/too.many.requests.error";

interface MyCont {
  req: Request;
  res: Response;
}

interface ThrottlerLog {
  timestamps: number[];
}

export enum KeyGenerationMechanism {
  IP = "ip",
  RESET = "reset"
}

/**
 *  
 * the throttler middleware is used to prevent the same user from making more than a configurable amount of requests in a configurable period of time to a set of endpoints with the same identifier.
 * if a user exceeds that count in the given timeframe, they must wait until the timeframe expired before they can make another request.
 * 
 * e.g. count: 2, timeframe: 1000 (1 second), identifier "A"
 * user U requests A at    0 -> PASS              | throttlerList:          [] ->         [0]
 * user U requests A at  500 -> PASS              | throttlerList:         [0] ->    [0, 500]
 * user U requests A at  999 -> THROTTLED         | throttlerList:    [0, 500] ->    [0, 500]
 * user U requests A at 1001 -> PASS, (0 expired) | throttlerList:       [500] -> [500, 1001]
 * user U requests A at 1100 -> THROTTLED         | throttlerList: [500, 1001] -> [500, 1001]
 * 
 * meanwhile a seperate user U' with a different IP has a seperate throttlerList so he can do as he pleases - although the throttler is always there.. waiting.. lurking in the shadows.. waiting to throttle!
 * 
 * To see how the middleware is used checkout requestAccountPasswordReset at the register.resolver.ts 
 * 
 * @param count the amount of requests that can be made in a certain time frame
 * @param timeframe in milliseconds in which requests are counted
 * @param identifier Identifier is used to differentiate between different throttlers. 
 * Multiple endpoints that use the same identifier will be throttled together meaning that if you have an endpoint "A" and an endpoint "B" with the same identifier and a limit of 2, then a user that requests a and then b and then a again will be throttled. 
 * Just make sure to use the same timevalue for both throttlers or else you might experience unexpected behavior as logs that are passed the expiration time are removed to keep things tidy and neat.
 */
export const Throttler = (count: number, timeframe: number, identifier: string, mechanism = KeyGenerationMechanism.IP): Middleware<MyCont> => {

  return async ({ context }: ResolverData<MyCont>, next: NextFn) => {
    // redis instance
    const redis = RedisClientInstance.getInstance();
    let redisKey = "";

    if (mechanism === KeyGenerationMechanism.IP) {
      // get ip address
      const ip = context.req.headers["x-forwarded-for"] || context.req.socket.remoteAddress || context.req.ip;

      // to keep track of the requests along with when an how often it was called theyre saved in redis. this is the key:
      redisKey = `${ip} ${identifier}`;
    }

    if (mechanism === KeyGenerationMechanism.RESET) {
      // get requested mail address <<< Not sure if theres a better way for this... probably yes
      try {
        let mail = context.req.body.query;
        mail = mail.substring(mail.indexOf("\"") + 1);
        mail = mail.substring(0, mail.indexOf("\""));

        // to keep track of the requests along with when an how often this mail was called theyre saved in redis. this is the key: 
        redisKey = `${mail} ${identifier}`;
      } catch {
        // console.error("throttler directive could not resolve mail")
      }
    }

    // lookup past requests by user with ip for query 
    const redisValue: ThrottlerLog = JSON.parse((await redis.get(redisKey)) as string) || { timestamps: [] };
    // add current timestamp to list of past calls
    redisValue.timestamps.push(Date.now());

    //remove older "expired" requests and add current request
    const firstNonExpiredEntryInTimeframe = redisValue.timestamps.findIndex(timestamp => timestamp >= Date.now() - timeframe)
    redisValue.timestamps.splice(0, firstNonExpiredEntryInTimeframe)

    // is the user possibly a mischievious spammer? if so throw error!
    if (redisValue.timestamps.length > count) {
      throw new TooManyRequestsError();
    } else {
      // if its okay save the new value in redis
      await redis.set(redisKey, JSON.stringify(redisValue));

      // carry on
      return next();
    }
  }

}