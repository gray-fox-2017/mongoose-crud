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
  let input = req.body
  input.out_date = new Date()

  let dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + parseInt(input.days))
  input.due_date = dueDate
  Transaction.create(input)
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

  Transaction.findOne({_id: id})
  .then((transaction)=>{
    let input = req.body

    if(input.hasOwnProperty('days')){
      let dueDate = transaction.out_date
      dueDate.setDate(dueDate.getDate() + parseInt(input.days))
      input.due_date = dueDate
    }

    if(input.hasOwnProperty('in_date')){
      let dueDate = new Date(transaction.due_date)
      let dateIn = new Date(input.in_date)
      let timeDiff = Math.abs(dateIn.getTime() - dueDate.getTime())
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

      if(dateIn.getTime() > dueDate.getTime() && diffDays !== 0){
        let sumBooks = transaction.booklist.length
        let fine = sumBooks*diffDays*500
        input.fine = fine
      }

      // console.log(diffDays);
    }


    Transaction.update({_id: id}, input)
    .then(()=>{
      res.send('transaction has been updated')
    })
    .catch((err)=>{res.send(err)})
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
