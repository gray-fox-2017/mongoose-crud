var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Transaction = require('../models/transaction')

var getTransactions = function(req, res) {
  Transaction.find({})
  .populate('booklist')
  .exec(function (err, trans) {
    if (err) return handleError(err);
    res.send(trans)
  });
}

var createTransaction = function(req, res) {
  Transaction.create(req.body, function(err, trans) {
    if(err) res.send(err)
    res.send(trans)
  })
}

var getOneTransaction = function(req, res) {
  Transaction.findById(req.params.id)
  .populate('booklist')
  .exec(function (err, trans) {
    if (err) return handleError(err);
    res.send(trans)
  });
}

var updateTransaction = function(req, res) {
  Transaction.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, trans) => {
    if(err) res.send(err)
    res.send(trans)
  })
}

var deleteTransaction = function(req, res) {
  Transaction.findOneAndRemove({_id: req.params.id}, (err, trans) => {
    if(err) res.send(err)
    res.send(trans)
  })
}

module.exports = {
  getTransactions, createTransaction, getOneTransaction, updateTransaction, deleteTransaction
};

// , getOneTransaction, updateTransaction, deleteTransaction