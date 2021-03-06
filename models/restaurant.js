const mongoose = require('mongoose')
const Schema = mongoose.Schema
const RestaurantSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  name_en: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  google_map: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  description:{
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)