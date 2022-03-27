//Import the mongoose module
const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/daily-mantra";
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Connected to mongodb!");
    }
  }
);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;