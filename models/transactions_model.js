var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var transactionsSchema = new Schema({
  memberid: String,
  days:     Number,
  out_date: Date,
  due_date: Date,
  in_date:  Date,
  fine:     Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books' }]
});

var Transactions = mongoose.model('transactions', transactionsSchema);

module.exports = Transactions;
