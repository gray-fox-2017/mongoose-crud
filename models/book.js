const mongoose = require('mongoose')
let Schema = mongoose.Schema

let bookSchema = new Schema({
  isbn: {
      type: String,
      required: true
  },
  title: {
      type: String,
      required: true
  },
  author: {
      type: String,
      required: true
  },
  category: {
      type: String,
      required: true
  },
  stock: {
      type: Number,
      required: true
  }
}) // bookSchema

let Book = mongoose.model('Book', bookSchema)

module.exports = Book