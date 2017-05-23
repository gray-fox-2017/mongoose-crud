var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Book = require('../models/book')

var insertBook = function(req, res) {
  Book.create(req.body, (err, book) => {
    if(err) res.send(err.errors)
    res.send(book)
  })
}

var findBooks = function(req, res) {
  Book.find({}, function (err, books) {
    res.send(books)
  });
}

var findOne = function(req, res) {
  Book.find({_id: req.params.id}, (err, book) => {
    res.send(book)
  })
}

var updateBook = function(req, res) {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, book) => {
    if(err) res.send(err.errors)
    res.send(book)
  })
}

var deleteBook = function(req, res) {
  Book.findOneAndRemove({_id: req.params.id}, (err, book) => {
    if(err) res.send(err)
    res.send(book)
  })
}

module.exports = {
  insertBook, findBooks, findOne, updateBook, deleteBook
};