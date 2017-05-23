var Book = require('../models/book')

var methods = {}

methods.insert = (req, res) => {
  Book.create(req.body, (err, book) => {
    if(err) res.send(err)
    res.send(book)
  })
}

methods.findAll = (req, res) => {
  Book.find({}, (err, books) => {
    if(err) res.send(err)
    res.send(books)
  })
}

methods.findById = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if(err) res.send(err)
    res.send(book)
  })
}

methods.update = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if(err) res.send(err)
    book.isbn = req.body.isbn || book.isbn
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.category = req.body.category || book.category
    book.save((err, saved) => {
      if(err) res.send(err)
      res.send(saved)
    })
  })
}

methods.delete = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if(err) res.send(err)
    book.remove(err => {
      res.send({message: `Book with id: ${book._id} has been deleted`})
    })
  })
}

module.exports = methods
