import loader from "./loaders/index.loader";
import config from './config/index.config';
import express from "express";
const app = express();

async function start() {
  // logger.info(`Started in ${process.env.NODE_ENV}`);
  await loader({ app: app });

  // await console.log({ app: app });
  await app.listen("3000", () => {
    app.emit("serverStarted");
    console.log(`
      ################################################
      Server started on port: http://${config.app.host}:${config.app.port}/${config.app.prefix}
      Visit the api documentation on: http://${config.app.host}:${config.app.port}/docs

      ################################################
    `);
  });
}
start();
export default app;

// const databaseConfig = require('./config/database');

// mongoose.connect(databaseConfig.database, databaseConfig.options).catch((reason) => {
//   console.log('Connection to Database failed, reason: ', reason);
// });

// mongoose.connection.on('connected', () => {
//   console.log(
//     `Mongoose connection open on ${
//       process.env.NODE_ENV && process.env.NODE_ENV.indexOf('development') > -1
//         ? 'test'
//         : 'production'
//     } database`
//   );
// });

// // mongoose.Promise = global.Promise;

// require('./models/Card');
// require('./models/Lecture');
// require('./models/User');
// require('./app');
