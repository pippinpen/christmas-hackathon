const mongoose = require("mongoose");
const logger = require("./logger");

const localDBName = "christmas";
const { MONGODB_URI = `mongodb://localhost/${localDBName}` } = process.env;

logger.info(`MONGODB_URI ${MONGODB_URI}`);

const promise = mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function (db) {
    logger.info(`Database Connected: ${MONGODB_URI}`);
  })
  .catch(function (err) {
    logger.info(`CONNECTION ERROR ${err}`);
  });