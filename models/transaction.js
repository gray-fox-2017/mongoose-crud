const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
  memberid : String,
  days : Number,
  out_date : Date,
  due_date : Date,
  in_date : Date,
  fine : Number,
  booklist : [{type : mongoose.Schema.ObjectId, ref : 'Book'}]
})
const Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction;
