const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
})

const MoviesModel = mongoose.model('MovieModel', MovieSchema);
module.exports = MoviesModel;