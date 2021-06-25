import mongoose from "mongoose";
import logger from "./logger.loader";
import config from "../config/index.config";
import promiseRetry from "promise-retry";
export default async () => {
  const options = {
    retries: config.database.maxRetries,
    factor: 1.5,
    minTimeout: config.database.reconnectInterval,
    maxTimeout: Number(config.database.reconnectInterval) * 2,
  };
  const connection = await _connect(options);
  return connection.connection.db;
};

async function _connect(retryOptions: any): Promise<any> {
  const connectionString = config.database.url;
  const options = config.database.options;
  return promiseRetry((retry, number) => {
    logger.info(`Attempt no. ${number} connecting to database`);
    return mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: true,
        keepAlive: true,
        useFindAndModify: false,
        keepAliveInitialDelay: Number(config.database.reconnectInterval),
        ...options,
        useUnifiedTopology: true,
      })
      .catch(retry);
  }, retryOptions).catch((err) => {
    logger.info(`Failed connecting to database}`);
    process.exit(1);
  });
}
