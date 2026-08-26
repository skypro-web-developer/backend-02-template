const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;