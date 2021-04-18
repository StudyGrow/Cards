import loader from "./loaders/index.loader";
import config from './config/index.config';
import express from "express";
import logger from './loaders/logger.loader';
const app = express();

async function start() {
  logger.info(`Started in ${process.env.NODE_ENV}`);
  await loader({ app: app });
  await app.listen("3000", () => {
    app.emit("serverStarted");
    logger.info(`
      #+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#
      Server started on port: http://${config.app.host}:${config.app.port}/${config.app.prefix}
      Visit the api documentation on: http://${config.app.host}:${config.app.port}/docs
      #+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#+#
    `);
  });
}
start();
export default app;