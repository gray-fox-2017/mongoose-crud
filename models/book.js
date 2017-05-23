var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    isbn: {
      type: String,
      required: [true, "Book's ISBN can't be empty!"]
    },
    title: {
      type: String,
      required: [true, "Book's title can't be empty!"],
      minlength: [2, 'Book title too short!']
    },
    author: String,
    category: String,
    stock: Number
});

var Book  = mongoose.model('Book', bookSchema);

module.exports = Book;