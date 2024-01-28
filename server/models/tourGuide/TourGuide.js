const mongoose = require("mongoose");

const TourGuideSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    uptoPeople: {
      type: Number,
      required: true,
    },
    responseTime: {
      type: String,
    },
    languages: { type: Array },
    profileImage: { type: String },
    tourGuideInstructionType: { type: String },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    availableAreas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
    ],

    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("TourGuide", TourGuideSchema);
