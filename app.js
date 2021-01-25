const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const session = require('express-session');
const sessionConfig = require('./config/session');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./config/swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(helmet());
app.use(require('./middleware/serviceMiddleware')());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.enable('trust proxy');
app.use(session(sessionConfig));

const passport = require('passport');

require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.indexOf('development') > -1) {
    console.log('Request: ', req.originalUrl);
  }
  next();
});

app.post('/api/login', (req, res, next) => {
  req.services.user.login(passport, req, res, next);
});

//api route
app.use('/api', require('./routes/api'));

//built angular files
app.use(express.static(path.join(__dirname, './angular-cards/dist/angular-cards/')));

//angular index.html file to always serve after client uses browser navigation
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './angular-cards/dist/angular-cards/index.html'))
);

module.exports = app;
