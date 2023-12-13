const mongoose = require("mongoose");

const ContinentSchema = new mongoose.Schema({
  name: String,
  code: String,
  countries: Array,
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
});

module.exports = mongoose.model("Continent", ContinentSchema);
