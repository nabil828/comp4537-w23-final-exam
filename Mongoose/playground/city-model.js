const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: { type: String, required: true },
  province: { type: String, required: true },
  country: { type: String, required: true },
  population: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  area: { type: Number, required: true },
  officialLanguage: { type: String, required: true }
});

const City = mongoose.model('City', citySchema);

module.exports = City;
