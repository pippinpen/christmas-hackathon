const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const logger = require('./logger');

const {
  NODE_ENV = 'development'
} = process.env;

module.exports = function (app) {
  // In dev mode, react-server serves the files BUT in production we BUILD the react project and express serves it out of the build folder
  if (NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/", "build")));
    app.use(compression());
  }

  // parse application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));

  // parse application/json
  app.use(express.json());

  // Helmet for security
  app.use(helmet());
  // CORS to make our API public
  app.use(cors());

  const myStream = {
    write: (text) => {
      logger.info(text)
    }
  }

  app.use(morgan('combined', { stream: myStream }));


};