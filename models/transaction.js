var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema ({
  //memberid: {type: Schema.Types.ObjectId, ref: 'customer'},
  memberid: String,
  days: String,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'book' }]
});

var transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;
