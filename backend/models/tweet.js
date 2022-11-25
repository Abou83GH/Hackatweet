const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  message: String,
  date: Date,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  hashtags: [{ type: mongoose.Schema.Types.ObjectId, ref: "trends" }],
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
