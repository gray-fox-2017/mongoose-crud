const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

const book = require('../models/book');
var createBook = ((req,res) => {
  let newBook = new book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  });
  newBook.save((err, createdBook) => {
    err ? res.send(err) : res.send(`Book is successfully added.\n${createdBook}`);
  });
});

var showBooks = ((req,res) => {
  book.find((err, books) => {
    err ? res.send(err) : res.send(books);
  });
});

var showBook = ((req,res) => {
  let id = req.params.id;
  book.find({_id: id}, (err, book) => {
    err ? res.send(err) : res.send(book);
  });
});

var updateBook = ((req,res) => {
  let id = req.params.id;
  book.findById(id, (err, book) => {
    if (err) res.send(err);
    else {
      book.isbn = req.body.isbn || book.isbn;
      book.title = req.body.title || book.title;
      book.author = req.body.author || book.author;
      book.category = req.body.category || book.category;
      book.stock = req.body.stock || book.stock;
      book.save((err, savedBook) => {
        err ? res.send(err) : res.send(`Book is successfully updated.\n${savedBook}`);
      });
    }
  });
});

var deleteBook = ((req,res) => {
  let id = req.params.id;
  book.findByIdAndRemove(id, (err,book) => {
    err ? res.send(err) : res.send('Book is deleted.');
  });
});

module.exports = {
  createBook,
  showBooks,
  showBook,
  updateBook,
  deleteBook
};
