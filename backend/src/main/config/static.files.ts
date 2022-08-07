import express, { Express } from "express";
import { resolve } from "path";
import path from "path";
import env from "./env";

export default (app: Express): void => {
  app.use(
    express.static(path.join(resolve(__dirname, "../../../dist/")))
  );
  app.get("*", function (req, res, next) {
    if (req.originalUrl.startsWith(env.app.prefix)) {
      next();
    } else {
      res.sendFile(
        path.join(resolve(__dirname, "../../../dist/index.html"))
      )
    }
  }
  );
};
