var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: String,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist:  [{ type: Schema.Types.ObjectId, ref: 'Books' }]
});

var transactions = mongoose.model('Transactions', transactionsSchema); //ready to go!

module.exports = transactions