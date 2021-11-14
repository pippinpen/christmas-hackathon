const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
})

const RecipesModel = mongoose.model('RecipesModel', RecipesSchema);
module.exports = RecipesModel;