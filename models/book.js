var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/libraries');

var Schema = mongoose.Schema;

var BooksSchema = new Schema ({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

var Books = mongoose.model('Books', BooksSchema);

module.exports = Books;
