const mongoose = require('mongoose');
mongoose.connect('monggodb://localhost:3000/library');
const Schema = mongoose.Schema;
let transactionSchema = new Schema({
  days: Number,
  memberid: String,//{type:Schema.Types.String,ref:'Customer'},
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  // booklist: Array,
  booklist: [{type:Schema.Types.ObjectId, ref:'Book'}]
});

let Transaction = mongoose.model('Transaction',transactionSchema);
module.exports = Transaction