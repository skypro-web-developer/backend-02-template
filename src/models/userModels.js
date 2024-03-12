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
      books: [{
        title: {
          type: String,
          required: true,
          minlength: 2,
        },
        author: {
          type: String,
          required: true,
          minlength: 2,
        },
        year: {
          type: Number,
          required: true,
        },
      }],
      
})
module.exports = mongoose.model("user", userShema)
