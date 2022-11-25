const mongoose = require("mongoose");

const trendsSchema = mongoose.Schema({
  hashtag: String,
  number: Number,
});

const Trends = mongoose.model("trends", trendsSchema);

module.exports = Trends;
