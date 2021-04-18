import {
  asValue,
  asClass,
  asFunction,
  createContainer,
  Lifetime,
} from "awilix";
import config from '../config/index.config';
import path from "path";
import passport from "passport";
import { User } from "../models/user.model";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cryptoRandomString from 'crypto-random-string';
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const bcrypt = require("bcryptjs");

const LocalStrategy = require("passport-local").Strategy;

export default async ({app, logger}) => {
  const container = createContainer();
  container.register({
    logger: asValue(logger),
  });
  container.register({
    database: asValue(mongoose),
  });
  container.register({
    jwt: asValue(jwt),
  });
  container.register({
    cryptoRandomString: asValue(cryptoRandomString),
  });
  container.register({
    config: asValue(config),
  });
  app.use(passport.initialize());
  app.use(passport.session());
  container.register({
    passport: asValue(
      passport.use(
        // new LocalStrategy(async function (username, password, done) {
        //   try {
        //     let user = await User.findOne({ username: username });
        //     console.log(user)
        //     if (!user) {
        //       throw new Error("Benutzername oder Passwort falsch");
        //     }
        //     let validation = await bcrypt.compare(password, user.password);
        //     console.log(validation)
        //     if (validation) {
        //       return done(null, user);
        //     } else {
        //       throw new Error("Benutzername oder Passwort falsch");
        //     }
        //   } catch (error) {
        //     return done(error);
        //   }
        // }),
        new GoogleStrategy(
          {
            clientID: config.authentication.google.clientId,
            clientSecret: config.authentication.google.secret,
            callbackURL: config.authentication.google.redirect_uri,
          },
          function (accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
          },
        ),
      ),
    ),
  });
  passport.serializeUser(function (user, done) {
    if (user) done(null, user);
    else logger.error("error on serializing user");
  });

  passport.deserializeUser(function (user, done) {
    User.findById(user, function (err, user) {
      done(err, user);
    });
  });
  container.loadModules(
    [
      [
        path.join(__dirname, '../models/*.model.ts'),
        { lifetime: Lifetime.SINGLETON, register: asValue },
      ],
      [
        path.join(__dirname, '../services/*.service.ts'),
        {
          lifetime: Lifetime.SCOPED,
          register: asClass,
        },
      ],
      [
        path.join(__dirname, '../middleware/*.factory.ts'),
        {
          lifetime: Lifetime.SCOPED,
          register: asClass,
        },
      ],
      [
        path.join(__dirname, '../middleware/*.middleware.ts'),
        {
          lifetime: Lifetime.SCOPED,
          register: asFunction,
        },
      ],
    ],
    {
      formatName: (name, descriptor) => {
        let prefix = name.split(".")[0];
        let suffix = name.split(".")[1];
        suffix = suffix.charAt(0).toUpperCase() + suffix.slice(1);
        return prefix + suffix;
      },
    }
  );
  logger.info("Dependency Injector loaded.");
  return container;
};
