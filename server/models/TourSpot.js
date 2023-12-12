const mongoose = require("mongoose");

const TourSpotSchema = new mongoose.Schema({
  name: String,
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  description: String,
});

module.exports = mongoose.model("TourSpot", TourSpotSchema);
