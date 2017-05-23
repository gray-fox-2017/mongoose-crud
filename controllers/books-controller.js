'use strict'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Book = require('../models/books')

var findAll = (req, res) => {
  Book.find({}, function (err, books) {
  if (err) return handleError(err);
    res.send(books);
  });
}

module.exports = {
  findAll
  // newBook,
  // getOneBook,
  // deleteBook,
  // updateBook
}
