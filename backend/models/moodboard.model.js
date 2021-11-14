const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ActivitiesModel } = require('./activities.model');
const { MoviesModel} = require('./movies.model');
const { RecipesModels} = require('./recipes.model');


const MoodBoardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  movies: [{
    type: mongoose.ObjectId,
    ref: 'MoviesModel'
  }],
  activities: [{
    type: mongoose.ObjectId,
    ref: 'ActivitiesModel',
  }],
  recipes: [{
    type: mongoose.ObjectId,
    ref: 'RecipesModel',
  }]
});

const MoodBoard = mongoose.model("MoodBoard", MoodBoardSchema);

module.exports = MoodBoard;