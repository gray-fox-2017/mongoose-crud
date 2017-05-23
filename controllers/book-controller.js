'use strict'
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Book = require('../models/books')

var findAll = (req, res) => {
  Book.find({})
  .then((books)=>{
    res.send(books)
  })
  .catch((err)=>{res.send(err)})
}

var newBook = (req, res) => {
  Book.create(req.body)
  .then(()=>{
    res.send('New Book has been added')
  })
  .catch((err)=>{res.send(err)})
}

var deleteBook = (req, res) => {
  let id = req.params.id
  Book.deleteOne({_id: id})
  .then(()=>{
    res.send('Book has been deleted')
  })
  .catch((err)=>{res.send(err)})
}

var getOneBook = (req, res) => {
  let id = req.params.id
  Book.find({_id: id})
  .then((book)=>{
    res.send(book)
  })
  .catch((err)=>{res.send(err)})
}

var updateBook = (req, res) => {
  let id = req.params.id
  Book.update({_id: id}, req.body)
  .then(()=>{
    res.send('book has been updated')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = {
  findAll,
  newBook,
  deleteBook,
  getOneBook,
  updateBook
}
