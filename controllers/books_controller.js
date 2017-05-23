var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const dbBook = require('../models/books_model.js')

var create = function(req, res) {
  dbBook.create(req.body, function(err, book) {
    if (!err) {
      res.send('book added and saved'+book)
    } else {
      res.send(err)
    }
  })
}

var getAll = function(req, res) {
  dbBook.find({}, function(err, book) {
    if(!err) {
      res.send(book)
    } else {
      res.send(err)
    }
  })
}

var remove = function(req, res) {
  let id = req.params._id
  var myquery = {_id : id}
  dbBook.remove(myquery, function(err, book) {
    if(!err) {
      console.log(book);
      res.send(`book success deleted!`)
    } else {
      res.send(err)
    }
  })
}




var edit = function(req, res) {
  let id = req.params._id
  var query_find = {_id : id}
  dbBook.findOne(query_find, function(err, book) {
    console.log(book);
    if (err) throw err;
    var query_set = { isbn : book.isbn,
                    title: book.title,
                    author: book.author,
                    category : book.category,
                    stock : book.stock };
    var newvalues = { isbn : req.body.isbn || book.isbn,
                      title: req.body.title || book.title,
                      author: req.body.author || book.author,
                      category : req.body.category || book.category,
                      stock : req.body.stock || book.stock};

    dbBook.update(query_set, newvalues, function(err, result) {
      if (err) throw err;
      res.send(result.nModified + " record updated")
    })
  })
}

module.exports = {
  router,
  create,
  remove,
  edit,
  getAll
};