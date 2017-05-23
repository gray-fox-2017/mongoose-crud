var Transaction = require('../models/transaction')

var methods = {}

methods.insert = (req, res) => {
  var transaction = {}
  transaction.memberid = req.body.memberid
  transaction.days = parseInt(req.body.days)
  transaction.out_date = new Date()
  var date = new Date()
  transaction.due_date = date.setDate(transaction.out_date.getDate() + transaction.days)
  transaction.booklist = req.body.booklist.split(',')
  Transaction.create(transaction, (err, transaction) => {
    if(err) res.send(err)
    res.send(transaction)
  })
}

methods.findAll = (req, res) => {
  Transaction.find({}, (err, transactions) => {
    if(err) res.send(err)
    res.send(transactions)
  })
}

methods.findById = (req, res) => {
  Transaction.findById(req.params.id)
  .populate('booklist')
  .then((err, transaction) => {
    if(err) res.send(err)
    res.send(transaction)
  })
}

methods.update = (req, res) => {
  Transaction.findById(req.params.id, (err, transaction) => {
    if(err) res.send(err)
    transaction.in_date = new Date()
    if (transaction.in_date.getDate() - transaction.due_date.getDate() > 0) {
      transaction.fine = (transaction.in_date.getDate() - transaction.due_date.getDate())*1000
    }
    transaction.save((err, saved) => {
      if(err) res.send(err)
      res.send(saved)
    })
  })
}

methods.delete = (req, res) => {
  Transaction.findById(req.params.id, (err, transaction) => {
    if(err) res.send(err)
    transaction.remove(err => {
      res.send({message: `Transaction with id: ${transaction._id} has been deleted`})
    })
  })
}

module.exports = methods
