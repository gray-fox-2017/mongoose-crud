var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transaction_collection = new Schema({
  memberid: {type : String},
  days:   {type : Number},
  out_date: {
       type: Date,
       default: new Date().toISOString()
       },
  due_date: {
       type: Date,
       default: new Date().toISOString()
       },
  in_date: {
       type: Date,
       default: new Date().toISOString()
       },
  fine: {type : Number},
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaktion = mongoose.model('Transaksi', transaction_collection);

module.exports = Transaktion;
