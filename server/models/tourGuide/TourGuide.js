const mongoose = require("mongoose");

const TourGuideSchema = new mongoose.Schema(
  {
    name: String,
    languages: Object,
    importantNote: String,
    profileImage: String,
    images: Object,
    
    email: String,
    about: String,
    rating: Number,
    responseTime: Object,
    tourCategory: String,
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
    availableAreas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    }],
    tourSpots: [{ type: mongoose.Schema.Types.ObjectId, ref: "TourSpot" }],

    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("TourGuide", TourGuideSchema);
