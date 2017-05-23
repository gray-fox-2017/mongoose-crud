const ObjectId = require('mongodb').ObjectID;
const Book = require('../models/book')
let methods = {}

methods.insertOne = (req, res) => {
  console.log('Success');
  let newBook = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })

  newBook.save((err, record) => {
    if (err) res.send(err)
    console.log('InsertOne book success');
    res.send(record)
  })
}

methods.getAll = (req, res) => {
  Book.find({}, (err, records) => {
    if (err) res.send(err)
    console.log('GetAll books success');
    res.send(records)
  })
}

methods.getById = (req, res) => {
  Book.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById book success');
    res.send(record)
  })
}

methods.updateById = (req, res) => {
  Book.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById book success');
    Book.updateOne({
      "_id": record._id
    }, {
      $set: {
        "isbn": req.body.isbn || record.isbn,
        "title": req.body.title || record.title,
        "author": req.body.author || record.author,
        "category": req.body.category || record.category,
        "stock": req.body.stock || record.stock
      }
    }, (err, response) => {
      if (err) res.send(err)
      console.log('UpdateById book success');
      res.send(record)
    })
  })
}

methods.deleteById = (req, res) => {
  Book.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById book success');
    Book.deleteOne({
      "_id": record._id
    }, (err, response) => {
      if (err) res.send(err)
      console.log('DeleteById book success');
      res.send(record)
    })
  })
}

module.exports = methods