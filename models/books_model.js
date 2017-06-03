const mongoose = require('mongoose')

let bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  image: String
})

let books = mongoose.model('books', bookSchema)

module.exports = books
