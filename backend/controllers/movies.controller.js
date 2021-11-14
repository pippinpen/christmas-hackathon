const MoodBoard = require("../models/moodboard.model");
const MovieModel = require("../models/movies.model");

exports.addMovie = function (req, res) {
  const movieData = req.body;
  const moodBoardId = req.params.moodBoardId;
  console.log(movieData);
  logger.ionfo(`movieData ${movieData}`);

  const newMovie = new MovieModel(movieData);
  newMovie.save((err, movie) => {
    if(err) return errorHandler(re)
  })
  const movieId = newMovie._id;
  console.log(movieId);

}