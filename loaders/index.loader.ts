import expressLoader from "./express.loader";
import dependencyLoader from "./dependency.loader";
import databaseLoader from "./database.loader";
import logger from "./logger.loader";

export default async ({ app }: { app: any }) => {
  await databaseLoader();
  const container = await dependencyLoader({
    app: app,
    logger: logger,
  });
  expressLoader({ app: app, container: container, logger: logger });
  logger.info("Loading complete.");
};
