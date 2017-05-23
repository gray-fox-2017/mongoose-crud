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

module.exports = methods