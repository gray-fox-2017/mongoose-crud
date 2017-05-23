const mongoose = require('mongoose')
const Schema = mongoose.Schema

var BooksSchema = new Schema({
  "isbn": String,
  "title": String,
  "author": String,
  "category": String,
  "stock": Number
});

var Book = mongoose.model('Book', BooksSchema);


module.exports = Book
