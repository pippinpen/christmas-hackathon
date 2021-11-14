const MoodBoard = require("../models/moodboard.model");
const MoviesModel = require("../models/movies.model");
const { errorHandler } = require("../utils/utils");
const logger = require('./../logger');

exports.createMoodBoard = function (req, res) {
  const moodBoardData = req.body;
  console.log(moodBoardData)
  logger.info(`moodBoardData ${moodBoardData}`);

  const newMoodBoard = new MoodBoard(moodBoardData );
  newMoodBoard.save((err, moodBoard) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(moodBoard);
  });
}; //createMoodBoard

exports.getBoards = function (req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  MoodBoard.find(query).exec((err, boards) => {
    if (err) return errorHandler(res, err);
    if (req.params.id && boards.length === 0) {
      return res.status(404).send({ message: "No Mood boards with this id" });
    }
    return res.status(200).json(boards);
  })
};//getBoards

exports.updateBoard = function (req, res) {
  MoodBoard.updateOne({ _id: req.params.id }, req.body, function (err, result) {
    if (err) return errorHandler(res, err);
    logger.info(`result ${result}`);
    if (result.nModified === 0) {
      return res.status(404).send({ message: "No boards with that id" });
    }
    res.sendStatus(200);
  })
};//updateBoard

exports.deleteBoard = function (req, res) {
  const boardId = req.params.id;
  MoodBoard.deleteOne({ _id: boardId }, function (err, report) {
    if (err) return errorHandler(res, err);
    logger.info(`report ${report}`);
    if (boardId && report.deletedCount === 0) {
      return res.status(404).send({ message: "No boards with that id" });
    }
    res.sendStatus(204);
  })
}// deleteBoard

