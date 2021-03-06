const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// title
// poster_path
// release_date

const ActivitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
})

const ActivitiesModel = mongoose.model('ActivitiesModel', ActivitiesSchema);
module.exports = ActivitiesModel;