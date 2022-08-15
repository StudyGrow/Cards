import setupMiddlewares from "./middlewares";
import setupApolloServer from "./apollo.server";
import setupRoutes from "./routes";
import setupStaticFiles from "./static.files";
import setupCronJob from "./cron.job";

import express from "express";

const app = express();
setupMiddlewares(app);
setupApolloServer(app);
setupStaticFiles(app);
setupRoutes(app);
if (process.env.NODE_ENV !== "testing") {
  setupCronJob();
}
export default app;
