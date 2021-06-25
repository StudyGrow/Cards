module.exports = {
  swaggerDefinition: {
    info: {
      title: ' Cards Webserver',
      description: '',
      servers: ['http://localhost:' + (process.env.PORT || 3000)],
    },
  },
  apis: ['../routes/*.js'],
};
