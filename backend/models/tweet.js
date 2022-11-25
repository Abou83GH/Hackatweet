const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  message: String,
  date: Date,
  likes: [String],
  hashtags: [String],
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
