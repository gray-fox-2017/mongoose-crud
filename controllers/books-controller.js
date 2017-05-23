'use strict'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Book = require('../models/books')

var findAll = (req, res) => {
  Book.find({}, function (err, books) {
  if (err) return res.send(err);
  res.send(books);
  });
}

var newBook = (req, res) => {
  Book.create(req.body, function (err, books) {
  if (err) return res.send(err);
  res.send('New Book has been added');
  });
}

module.exports = {
  findAll,
  newBook
  // getOneBook,
  // deleteBook,
  // updateBook
}
