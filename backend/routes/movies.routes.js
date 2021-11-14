const express = require('express');
const logger = require('../logger');
const router = express.Router();

const {
  addMovie,
} = require('./../controllers/movies.controller');


router.post("/", addMovie);
