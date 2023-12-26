const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: String,
  divisionId: { type: mongoose.Schema.Types.ObjectId, ref: "Division" },
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
  touristSpotsId: { type: mongoose.Schema.Types.ObjectId, ref: "TourSpot" },
  photo: String,
  continentId: { type: mongoose.Schema.Types.ObjectId, ref: "Continent" },
  description: String,
  countryCode: String,
  continent: String,
});

module.exports = mongoose.model("Country", CountrySchema);
