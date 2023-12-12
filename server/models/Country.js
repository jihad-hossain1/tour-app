const mongoose = require("mongoose");
// const { description } = require("../schema/schema");

const CountrySchema = new mongoose.Schema({
  name: String,
  Division: {
    type: String,
  },
  touristSpots: {
    type: String,
  },
  // tourSpotId: { type: mongoose.Schema.Types.ObjectId, ref: "TourSpot" },
  photo: String,
  continent: {
    type: String,
  },
  description: String,
});

module.exports = mongoose.model("Country", CountrySchema);
