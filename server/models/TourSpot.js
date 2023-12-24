const mongoose = require("mongoose");

const TourSpotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    description: {
      type: String,
    },

    photo: {
      type: String,
    },

    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    divisionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Division",
    },

    cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City" },

    perfectTourTime: { type: String },

    howToGoThere: { type: String },

    howToStayThere: { type: String },

    howDoHere: { type: String },

    whereToEat: { type: String },

    tourTipsGuide: { type: String },

    topTourPlace: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TourSpot", TourSpotSchema);
