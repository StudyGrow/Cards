import { Express } from "express";
import cookieParser from "cookie-parser";
import { cors } from "../middlewares/cors";
import { bodyParser } from "../middlewares/body.parser";
import { contentType } from "../middlewares/content.type";

export default (app: Express): void => {
  app.use(cookieParser());
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};
