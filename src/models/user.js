const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  subname: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
});

module.exports = mongoose.model("user", userShema);
