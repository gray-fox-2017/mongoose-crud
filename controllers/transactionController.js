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
  let input = req.body;
  input.out_date = new Date();

  var due = new Date()
  due.setDate(due.getDate() + parseInt(input.days));
  input.due_date = due;

  Transaction.create(input, function(err, trans) {
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
  Transaction.findById(req.params.id, (err, trans) => {
    if(err) {
      res.send(err)
    } else {
      trans.in_date = new Date()

      trans.memberid = req.body.memberid || trans.memberid
      trans.days = req.body.days || trans.days
      trans.booklist = req.body.booklist || trans.booklist

      if(trans.in_date > trans.due_date) {
        let days = Math.round((trans.in_date - trans.due_date)/(1000*24*3600))
        let books = trans.booklist.length
        trans.fine = 500 * books * days;
      } else {
        trans.fine = 0;
      }

      trans.save( (err, trans) => {
        if(err) res.send(err)
        res.send(trans)
      })
    }
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