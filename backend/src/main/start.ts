import { mongoose } from "@typegoose/typegoose";
import promiseRetry from "promise-retry";
import config from "../config/config";
import env from "./config/env";

export default async function main() {
  const options = {
    retries: config.database.maxRetries,
    factor: 1.5,
    minTimeout: config.database.reconnectInterval,
    maxTimeout: Number(config.database.reconnectInterval) * 2,
  };
  if (process.env.NODE_ENV !== "testing") {
    let connection = await _connect(options);
    return connection!.connection.db;
  } else {
    await _connect(options);
  }
}

async function _connect(retryOptions: any) {
  let connectionString: string;
  let options = {};
  if (config.database.url) {
    connectionString = config.database.url;
  } else {
    connectionString = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`;
    options = {
      auth: {
        authdb: config.database.name,
        user: config.database.user,
        password: config.database.password,
      },
      dbName: config.database.name,
      user: config.database.user,
      pass: config.database.password,
    };
  }
  const app = (await import("./config/app")).default;
  if (process.env.NODE_ENV !== "testing") {
    app.listen(env.app.port, () =>
      console.log(`Server running at http://localhost:${env.app.port}${env.app.prefix}`)
    );
    return promiseRetry((retry, number) => {
      return mongoose
        .connect(connectionString, config.database.mongooseOptions)
        .catch(retry);
    }, retryOptions).catch((err) => {
      process.exit(1);
    });
  }
}
main();
