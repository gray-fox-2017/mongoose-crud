var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var booksSchema = new Schema({
  isbn:     String,
  title:    String,
  author:   String,
  category: String,
  stock:    String
});

var Books = mongoose.model('books', booksSchema);

module.exports = Books;
