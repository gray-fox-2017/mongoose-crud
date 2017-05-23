const Books = require('../models/books_model');

function getAll(req, res) {
  Books.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Books.find({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following record:");
    console.log(result);
    res.send(result);
  });
}

function createBook(req, res) {
  Books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteBook(req, res) {
  Books.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

function updateBook(req, res) {
  Books.find({
    _id: req.params.id
  }, function(err, result) {
    Books.update({
      _id: result[0]._id
    }, {
      $set: {
        isbn: req.body.isbn || result[0].isbn,
        title: req.body.title || result[0].title,
        author: req.body.author || result[0].author,
        category: req.body.category || result[0].category,
        stock: req.body.stock || result[0].stock
      }
    }, (err, result) => {
      if (err) return res.send(err)
        res.send(result);
    });
  });
}

module.exports = {
  getAll, getSingle, createBook, deleteBook, updateBook
}
