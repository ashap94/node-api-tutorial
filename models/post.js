const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

// can cross out schema validation of min and max length thanks to validator middleware constructed
// by passing it req and performing error logic there

module.exports = mongoose.model("Post", postSchema);
