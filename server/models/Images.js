const mongoose = require("mongoose");

const Images = new mongoose.Schema({
  urls: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  clientProfileID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TourGuide",
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
});

module.exports = mongoose.model("Image", Images);
