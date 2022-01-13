import dotenv from "dotenv";

dotenv.config();

export default {
  app: {
    prefix: process.env.APP_PREFIX || "api",
    port: process.env.PORT,
    host: process.env.APP_HOST || "localhost",
  },
  authentication: {
    secret: process.env.APP_AUTH_SECRET,
    expiration: process.env.AUTH_TOKEN_EXPIRATION,
    refreshExpiration: process.env.REFRESH_TOKEN_EXPIRATION,
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
    url: `${
      process.env.NODE_ENV && process.env.NODE_ENV.indexOf("development") > -1
        ? process.env.MONGO_URL_TEST
        : process.env.MONGO_URL_PRODUCTION
    }`,
    secret: process.env.SECRET,
    options: {},
    maxRetries: process.env.DB_MAX_RETRIES || 3,
    reconnectInterval: process.env.DB_RETRY_INTERVAL || 5000,
  },
  log: {
    level: process.env.LOG_LEVEL || "silly",
  },
};
