'use strict'
var Transaction = require('../models/transactions')

var findAll = (req, res) => {
  Transaction.find({})
  .populate('booklist')
  .then((transactions)=>{
    res.send(transactions)
  })
  .catch((err)=>{res.send(err)})
}

var newTransaction = (req, res) => {
  Transaction.create(req.body)
  .then(()=>{
    res.send('New Transaction has been added')
  })
  .catch((err)=>{res.send(err)})
}

var deleteTransaction = (req, res) => {
  let id = req.params.id
  Transaction.deleteOne({_id: id})
  .then(()=>{
    res.send('Transaction has been deleted')
  })
  .catch((err)=>{res.send(err)})
}

var getOneTransaction = (req, res) => {
  let id = req.params.id
  Transaction.find({_id: id})
  .populate('booklist')
  .then((err, transaction)=>{
    if (err) {
      res.send(err)
    }
    res.send(transaction)
  })
}

var updateTransaction = (req, res) => {
  let id = req.params.id
  Transaction.update({_id: id}, req.body)
  .then(()=>{
    res.send('transaction has been updated')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = {
  findAll,
  newTransaction,
  deleteTransaction,
  getOneTransaction,
  updateTransaction
}
