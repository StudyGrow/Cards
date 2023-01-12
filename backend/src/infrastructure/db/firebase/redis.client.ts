import { RedisClient, createClient } from "redis";
import env from "../../../main/config/env";

class RedisClientInstance {
  private static _instance: RedisClientInstance;
  private readonly _client: RedisClient;

  constructor() {
    this._client = createClient({
      host: env.app.redisHost,
      port: parseInt(env.app.redisPort.toString(), 10),
    })
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new RedisClientInstance();
    return this._instance;
  }

  public get getClient() {
    return this._client;
  }

  public set(key: any, value: any) {
    return new Promise<void>((resolve, reject) => {
      return this._client.set(key, value, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }
  public setExp(key: string, value: string, mode: string, duration: number) {
    return new Promise<void>((resolve, reject) => {
      return this._client.set(key, value, mode, duration, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }
  public del(key: any) {
    return new Promise((resolve, reject) => {
      return this._client.del(key, (err: any, number: any) => {
        if (err) {
          return reject(err);
        }
        return resolve(!!number);
      });
    });
  }
  public get(key: any) {
    return new Promise((resolve, reject) => {
      return this._client.get(key, (err: any, jsonDecode: unknown) => {
        if (err) {
          return reject(err);
        }
        return resolve(jsonDecode);
      });
    });
  }
}

export default RedisClientInstance;
