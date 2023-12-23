const mongoose = require("mongoose");

const TourSpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  divisionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Division",
    required: true,
  },

  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },

  perfectTourTime: { type: String },

  howToGoThere: { type: String },

  howToStayThere: { type: String },

  howDoHere: { type: String },

  whereToEat: { type: String },

  tourTipsGuide: { type: String },

  topTourPlace: { type: String },
});

module.exports = mongoose.model("TourSpot", TourSpotSchema);
