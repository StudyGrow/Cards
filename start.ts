import loader from "./loaders/index.loader";
import config from "./config/index.config";
import express from "express";
import logger from "./loaders/logger.loader";
import cron from "node-cron";
import fetch from "cross-fetch";
const app = express();

const job = cron.schedule("* 0 * * *", async () => {
  const response = await fetch("https://studygrow-cards.herokuapp.com");
  const status = response.status;
  console.log(status);
  if (status !== 200) {
    logger.error("Server is down");
  }
});

async function start() {
  logger.info(`Started in ${process.env.NODE_ENV}`);
  loader({ app: app }).then(async () => {
    const response = await fetch("https://studygrow-cards.herokuapp.com");
    const status = response.status;
    console.log(status);
    if (status !== 200) {
      logger.error("Server is down");
      await fetch("https://studygrow-cards.herokuapp.com");
    }
  });
  app.listen(process.env.PORT, () => {
    app.emit("serverStarted");
    logger.info(
      `
  Server started on port: http://${config.app.host}:${config.app.port}/${config.app.prefix}
  Visit the api documentation on: http://${config.app.host}:${config.app.port}/docs`
    );
    // Use this if the 4th param is default value(false)
    job.start();
  });
}
start();
export default app;
