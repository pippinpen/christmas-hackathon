const express = require('express');
const logger = require('../logger');
const router = express.Router();

const {
  createMoodBoard,
  getBoards,
  updateBoard,
  deleteBoard,
} = require('./../controllers/moodboard.controller');

router
  .get("/:id?", getBoards)
  .post("/", createMoodBoard)
  .put("/:id", updateBoard)
  .delete("/:id", deleteBoard)

module.exports = router;