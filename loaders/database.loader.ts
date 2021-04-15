import mongoose from "mongoose";
// import logger from './logger.loader';
import config from "../config/index.config";
import promiseRetry from "promise-retry";
export default async () => {
  const options = {
    retries: config.database.maxRetries,
    factor: 1.5,
    minTimeout: config.database.reconnectInterval,
    maxTimeout: Number(config.database.reconnectInterval) * 2,
  };
  let connection = await _connect(options);
  return connection.connection.db;
};

async function _connect(retryOptions: any) {
  let connectionString = config.database.url;
  const options = config.database.options;
  return promiseRetry((retry, number) => {
    console.log(`Attempt no. ${number} connecting to: ${connectionString}`);
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
    console.log(`Failed connecting to: ${connectionString}`);
    process.exit(1);
  });
}
