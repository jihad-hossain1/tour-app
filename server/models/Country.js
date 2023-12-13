const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: String,
  division: String,
  touristSpots: String,
  photo: String,
  continent: { type: mongoose.Schema.Types.ObjectId, ref: "Continent" },
  description: String,
});

module.exports = mongoose.model("Country", CountrySchema);
