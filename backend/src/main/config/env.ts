require("dotenv").config();

export default {
  app: {
    prefix: process.env.API_ENDPOINT || "/api",
    port: process.env.PORT,
    host: process.env.HOST || "http://localhost",
    redisPort: process.env.REDIS_PORT || 6379,
    redisHost: process.env.REDIS_HOST || "localhost",
    runType: process.env.NODE_ENV || "testing",
  },
  authentication: {
    secret: process.env.APP_AUTH_SECRET || "secressst",
    authenticationExpiration: process.env.AUTH_TOKEN_EXPIRATION,
    refreshExpiration: process.env.REFRESH_TOKEN_EXPIRATION,
    authTokenCookieName: process.env.AUTH_TOKEN_COOKIE_NAME || "authToken",
    redisAuthTokenKey: process.env.REDIS_AUTH_TOKEN_KEY || "auth_token",
    jwtAuthTokenValidityDuration: process.env.REDIS_AUTH_TOKEN_VALIDITY_DURATION || "10m",
    refreshTokenCookieName: process.env.REFRESH_TOKEN_COOKIE_NAME || "refreshToken",
    redisRefreshTokenKey: process.env.REDIS_REFRESH_TOKEN_KEY || "refresh_token",
    jwtRefreshTokenValidityDuration: process.env.REDIS_REFRESH_TOKEN_VALIDITY_DURATION || "30d",
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
};
