const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Admin:McTWYORRCItP5YhP@cluster0.c6yqnxn.mongodb.net/hackatweet";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))

  .catch((error) => console.error(error));
