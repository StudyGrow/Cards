import expressLoader from './express.loader';
import dependencyLoader from './dependency.loader';
import databaseLoader from './database.loader';
// import logger from './logger.loader';

export default async ({ app }: { app: any }) => {
  const db = await databaseLoader();
  const container = await dependencyLoader({
    app: app
  });
  await expressLoader({ app: app, container: container });
//   logger.info('Loading complete.');
};
