const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
  },
  release_data: {
    type: String,
  }
})

const MoviesModel = mongoose.model('MovieModel', MovieSchema);
module.exports = MoviesModel;