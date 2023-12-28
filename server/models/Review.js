const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: String,
  img: String,
  title: String,
  tourSpotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TourSpot",
  },
  email: String,
  content: String,
},{ timestamps: true });

module.exports = mongoose.model("Review", ReviewSchema);
