require("dotenv").config({ path: __dirname + "/../../.env" });

export default {
  app: {
    prefix: process.env.API_ENDPOINT || "api",
    port: process.env.PORT,
    host: process.env.HOST || "http://localhost",
    runType: process.env.NODE_ENV || "testing",
  },
  authentication: {
    secret: process.env.APP_AUTH_SECRET || "secressst",
    authenticationExpiration: process.env.AUTH_TOKEN_EXPIRATION || "1h",
    refreshExpiration: process.env.REFRESH_TOKEN_EXPIRATION || "7d",
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
    url: process.env.MONGO_URL_TEST,
    secret: process.env.SECRET,
    mongooseOptions: {
      autoIndex: true,
      keepAlive: true,
      keepAliveInitialDelay: Number(process.env.DB_RETRY_INTERVAL || 5000),
    },
    name: process.env.MONGO_INITDB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    reconnectInterval: process.env.DB_RETRY_INTERVAL || 5000,
    port: process.env.DB_PORT,
    maxRetries: process.env.DB_MAX_RETRIES || 3,
  },
  log: {
    level: process.env.LOG_LEVEL || "silly",
  },
  mail: {
    host: process.env.MAIL_HOST || "smtp.ionos.de",
    port: Number(process.env.MAIL_PORT || 587),
    auth: {
      user: process.env.MAIL_USER || "info@renergi.de",
      pass: process.env.MAIL_PASS || "",
    },
    website: process.env.MAIL_WEBSITE || "https://app.renergi.de",
    passwordResetPath: process.env.MAIL_PASSWORD_RESET_PATH || "reset_password",
  },
};
