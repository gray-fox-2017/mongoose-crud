const mongoose = require('mongoose');

// const ObjectID = require("mongodb").ObjectID;
mongoose.connect('mongodb://localhost/library');
let Transaction = require('../models/transactions');
// let Book = require('../models/books');

const listTransaction = (req,res) => {
  Transaction.find().populate('booklist')
  .exec((err,transaction)=> {res.send(err? err : transaction);})
}

const findOneTransaction = (req,res) => {
  Transaction.findOne(
    {_id: (req.params.id)}
  ).populate('booklist')
  .exec((err,transaction)=> {res.send(err? err : transaction);})
}

const updateTransaction = (req,res) => {
  Transaction.findOne(
    {_id: (req.params.id)},
    (err,transaction)=>{
      if (!err) {
        if (typeof req.body.days !== 'undefined' && req.body.days !=='') transaction.days = req.body.days;
        if (typeof req.body.memberid !== 'undefined' && req.body.memberid !=='') transaction.memberid = req.body.memberid;
        transaction.in_date  = new Date();// new Date('2017-05-27T09:50:13.727Z');
        if (transaction.due_date < transaction.in_date ) {
          let diff = Math.ceil( (transaction.in_date - transaction.due_date) / (1000 * 3600 * 24));
          console.log('diff '+diff)
          console.log('len '+transaction.booklist.length);
          let fine  = diff * 500 * transaction.booklist.length;
          transaction.fine =  fine;
        }
        if (typeof req.body.fine !== 'undefined' && req.body.fine !=='') transaction.fine = req.body.fine;
        transaction.save( (err,trans)=>{  res.send(err? err : `${trans._id} sudah dikembalikan` );});

      }
    }
  )
}

const destroyTransaction = (req,res) => {
  Transaction.remove({_id:(req.params.id)}, (err,result) => {
    res.send(err? err : `Transaction sudah dihapus` );
  })
}

const insertTransaction = (req,res) => {
  let transaction = {}
  if (typeof req.body.days !== 'undefined' && req.body.days !=='') transaction.days = parseInt(req.body.days);
  if (typeof req.body.memberid !== 'undefined' && req.body.memberid !=='') transaction.memberid = req.body.memberid;
  transaction.out_date  = new Date();
  let date = new Date();
  date = date.setDate(date.getDate() + transaction.days);
  transaction.due_date = date;




  if (typeof req.body.booklist !== 'undefined') {
    // console.log(req.body.booklist)
    transaction.booklist = JSON.parse(req.body.booklist);
  }
  if (typeof req.body.fine !== 'undefined' && req.body.fine !=='') transaction.fine = parseInt(req.body.fine);

  let newTransaction = new Transaction(transaction);

  newTransaction.save((err,newtransaction)=>{
    res.send(err? err : `${newtransaction._id} sudah dimasukan` );
  });

}

module.exports = {
  listTransaction,
  findOneTransaction,
  updateTransaction,
  destroyTransaction,
  insertTransaction
}