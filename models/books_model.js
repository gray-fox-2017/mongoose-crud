var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

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
