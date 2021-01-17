//config of database

module.exports = {
  database: `mongodb+srv://admin:admin@cluster0-eyxul.gcp.mongodb.net/${
    process.env.NODE_ENV && process.env.NODE_ENV.indexOf('development') > -1
      ? 'production'
      : 'production'
  }?retryWrites=true&w=majority`,
  sercret: '42',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
