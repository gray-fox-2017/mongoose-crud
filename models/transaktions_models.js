var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transaction_collection = new Schema({
  memberid: String,
  days:   String,
  out_date: String,
  due_date: String,
  in_date: String,
  fine: String,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaktion = mongoose.model('Transaksi', transaction_collection);

module.exports = Transaktion;
