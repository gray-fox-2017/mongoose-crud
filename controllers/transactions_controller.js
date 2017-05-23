const Transactions = require('../models/transactions_model');

function getAll(req, res) {
  Transactions.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Transactions.find({
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

function createTransaction(req, res) {
  let due = new Date();
  due.setDate(due.getDate() + parseInt(req.body.days));

  Transactions.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: due,
    booklist: req.body.booklist
    // in_date dan fine ketika buku dikembalikan (updateTransaction)
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteTransaction(req, res) {
  Transactions.remove({
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

function updateTransaction(req, res) {
  let id = req.params.id;

  Transactions.findById(id, function(err, result) {
    if (err) res.send(err.message);
    result.in_date = new Date();
    if (result.in_date > result.due_date) {
      let late = Math.round((result.in_date - result.due_date) / (1000*24*3600));
      let bookCount = result.booklist.length * 500;
      result.fine = late * bookCount;
    } else {
      result.fine = 0;
    }

    result.save(function(err) {
      if (err) res.send(err.message);
      console.log("Update Success..");
      res.send(result);
    });

  });
}

module.exports = {
  getAll, getSingle, createTransaction, deleteTransaction, updateTransaction
}
