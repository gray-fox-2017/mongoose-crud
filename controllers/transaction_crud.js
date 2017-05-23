const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

const transaction = require('../models/transaction');

var createTransaction = ((req,res) => {
  let out_date = new Date();
  let due_date = new Date();
  due_date.setDate(due_date.getDate() + parseInt(req.body.days));
  let newTransaction = new transaction({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: out_date,
    due_date: due_date,
    //in_date and fine are added at update
    booklist: JSON.parse(req.body.booklist)
  });
  newTransaction.save((err, createdTransaction) => {
    err ? res.send(err) : res.send(`Transaction is successfully added.\n${createdTransaction}`);
  });
});

var showTransactions = ((req,res) => {
  transaction.find()
    .populate('booklist')
    .exec((err, transaction) => {
      res.send(err ? err : transaction);
    });
});

var showTransaction = ((req,res) => {
  let id = req.params.id;
  transaction.findOne({_id:id})
    .populate('booklist')
    .exec((err, transaction) => {
      err ? res.send(err) : res.send(transaction);
    });
});

var updateTransaction = ((req,res) => {
  let id = req.params.id;
  transaction.findById(id, (err, transaction) => {
    if (err) res.send(err);
    else {
      transaction.in_date = new Date();
      (transaction.in_date > transaction.due_date) ? transaction.fine = Math.round((transaction.in_date - transaction.due_date)/(1000*24*3600))*transaction.booklist.length*500 : transaction.fine = 0;
      transaction.save((err, savedTransaction) => {
        err ? res.send(err) : res.send(`Transaction is successfully updated.\n${savedTransaction}`);
      });
    }
  });
});

var deleteTransaction = ((req,res) => {
  let id = req.params.id;
  transaction.findByIdAndRemove(id, (err,transaction) => {
    err ? res.send(err) : res.send('Transaction is deleted.');
  });
});

module.exports = {
  createTransaction,
  showTransactions,
  showTransaction,
  updateTransaction,
  deleteTransaction
};
