const ObjectId = require('mongodb').ObjectId;
const bookModel = require('../models/book')

const addBook = function(req,res) {
  bookModel.create({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const getAll = function(req,res) {
  bookModel.find({},
  function (err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const updateBook = function(req,res) {
  bookModel.findOne({
    _id : ObjectId(req.params.id)
  }, function(err,result) {
    if (err) {
      res.send(err)
    } else {
      result.isbn = req.body.isbn || result.isbn
      result.title = req.body.title || result.title
      result.author = req.body.author || result.author
      result.category = req.body.category || result.category
      result.stock = req.body.stock || result.stock
      result.save(function(err,result) {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

const deleteBook = function(req,res) {
  bookModel.deleteOne({
    _id : ObjectId(req.params.id)
  },function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send(` Delete book with id ${req.params.id} success`)
    }
  })
}

module.exports = {
  addBook,
  getAll,
  updateBook,
  deleteBook
};
