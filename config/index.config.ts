import dotenv from "dotenv";
import path from "path";
// const session = require('express-session');
// // const MongoStore = require('connect-mongo')(session); //store session on MongoDb
// // import * as mongoose from 'mongoose';

let envPath = path.join(__dirname, `../../.env`);
dotenv.config({
  path: envPath,
});
const env = dotenv.config();
if (env.error) {
  let error = `Couldn't find ${envPath} file`;
  throw new Error(error);
}

export default {
  app: {
    prefix: process.env.APP_PREFIX || "api",
    port: process.env.PORT,
    host: process.env.APP_HOST || "localhost",
  },
  authentication: {
    secret: process.env.APP_AUTH_SECRET,
    expiration: "1m",
    refreshExpiration: "3d",
    apple: {
      clientId: process.env.APP_APPLE_CLIENTID,
      teamId: process.env.APP_APPLE_TEAMID,
      keyId: process.env.APP_APPLE_KEYID,
      scope: process.env.APP_APPLE_SCOPE,
      authKey: process.env.APP_APPLE_AUTHKEY,
    },
    google: {
      clientId: process.env.APP_AUTH_GOOGLE_CLIENTID,
      secret: process.env.APP_AUTH_GOOGLE_SECRET,
      redirect_uri: process.env.APP_AUTH_GOOGLE_REDIRECT_URI,
    },
  },
  database: {
    url: `mongodb+srv://admin:admin@cluster0-eyxul.gcp.mongodb.net/${
      process.env.NODE_ENV && process.env.NODE_ENV.indexOf("development") > -1
        ? "test"
        : "production"
    }?retryWrites=true&w=majority`,
    sercret: "42",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    maxRetries: process.env.DB_MAX_RETRIES || 3,
    reconnectInterval: process.env.DB_RETRY_INTERVAL || 5000,
  },
  session: {
    secret: 'wibgewe13f13', //random string
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      secure: process.env.NODE_ENV && process.env.NODE_ENV.indexOf('development') > -1 ? false : true,
    }, //secure needs to be set to true for production here
    expires: new Date(new Date()),
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  
  },
  log: {
    level: process.env.LOG_LEVEL || "silly",
  },
};
