import { scopePerRequest, loadControllers } from "awilix-express";
// import logger from "./logger.loader";
import cors from "cors";
import config from "../config/index.config";
import bodyParser from "body-parser";
// import { CelebrateError } from "celebrate";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import passport from "passport";

const helmet = require("helmet");
const express = require("express");
export default ({ app, container }) => {
  app.use(function (req, res, next) {
    if (req.secure || process.env.NODE_ENV.indexOf("development") > -1) {
      next();
    } else {
      res.redirect("https://" + req.headers.host + req.url);
    }
  });
  app.use(helmet());
  // app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get("/available", (_req: any, res: any) => {
    res.status(200).end();
  });
  app.enable("trust proxy");

  app.use((req: any, _res: any, next: any) => {
    console.log(req.path);
    next();
  });
  require("../config/passport")(passport);

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(scopePerRequest(container));
  //   const subroutes = loadControllers("../routes/**/*.subroute.ts", {
  //     cwd: __dirname,
  //   });
  const routes = loadControllers("../routes/**/*.ts", {
    cwd: __dirname,
  });
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Cards Backend",
        version: "0.1.0",
        description: "RESTful api for the cards app",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "",
          url: "",
          email: "",
        },
      },
      servers: [
        {
          url: `http://${config.app.host}:${config.app.port}/${config.app.prefix}`,
        },
      ],
    },
    apis: [path.join(__dirname, "../routes/**/*.ts")],
  };
  const specs = swaggerJsdoc(options);
  // app.use(`/docs`, swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
  app.use(`/api/`, [routes]);


  // app.post(
  //   "/api/login",
  //   (req, res, next) => {
  //     req.headers.cookie &&
  //     req.headers.cookie.includes("cookieconsent_status=deny")
  //       ? res
  //           .status(401)
  //           .send("Bitte akzeptiere cookies um dieses Feature zu nutzen")
  //       : next();
  //   },
  //   (req, res, next) => {
  //     req.services.user.login(passport, req, res, next);
  //   }
  // );
  //built angular files

  app.use(
    express.static(path.join(__dirname, "../angular-cards/dist/angular-cards/"))
    );
    // //angular index.html file to always serve after client uses browser navigation

app.get("*", (req, res) =>
  res.sendFile(
    path.join(__dirname, "../angular-cards/dist/angular-cards/index.html")
  )
);
  //   app.use((err: any, _req: any, res: any, next: any) => {
  //     if (err instanceof CelebrateError) {
  //       let message =
  //         err?.details?.get("body")?.details?.map((msg) => msg.message) ||
  //         "Validation Error";
  //       res.status(400).send(message);
  //     } else {
  //       return next(err);
  //     }
  //   });
  // app.use((err: any, _req: any, _res: any, next: any) => {
  //   console.log(err);
  //   return next(err);
  // });
};
