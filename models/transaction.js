const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
  memberid : String,
  days : Number,
  out_date : Date,
  due_date : Date,
  in_date : Date,
  fine : Number,
  booklist : Array
})
const Customer = mongoose.model('Transaction',transactionSchema)

module.exports = {
  Customer
};
