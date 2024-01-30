const mongoose = require("mongoose");

const TourGuideSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    uptoPeople: {
      type: String,
    },
    responseTime: {
      type: String,
    },
    languages: {
      type: Array,
    },
    profileImage: {
      type: String,
    },
    tourGuideInstructionType: {
      type: String,
    },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    availableAreas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
    ],

    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("TourGuide", TourGuideSchema);
