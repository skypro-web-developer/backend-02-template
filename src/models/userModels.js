const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
      },
      lastName: {
        type: String,
        required: true,
        minlength: 2,
      },
      userName: {
        type: String,
        required: true,
        minlength: 5,
      },
      books: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
        default: [],
      }
})
module.exports = mongoose.model("user", userShema)
