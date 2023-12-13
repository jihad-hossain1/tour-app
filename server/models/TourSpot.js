const mongoose = require("mongoose");

const TourSpotSchema = new mongoose.Schema({
  name: String,
  description: String,
  photo: String,
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
});

module.exports = mongoose.model("TourSpot", TourSpotSchema);
