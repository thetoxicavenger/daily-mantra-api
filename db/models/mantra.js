//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const MantraSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

// Compile model from schema
const MantraModel = mongoose.model("MantraModel", MantraSchema);

module.exports = MantraModel;
