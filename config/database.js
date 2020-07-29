module.exports = {
  database: `mongodb+srv://admin:admin@cluster0-eyxul.gcp.mongodb.net/${
    process.env.NODE_ENV == "development" ? "test" : "production"
  }?retryWrites=true&w=majority`,
  sercret: "42",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
