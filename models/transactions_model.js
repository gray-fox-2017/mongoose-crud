var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactions = new Schema({
  memberid:  String,
  days: String,
  out_date:   String,
  due_date: [{ body: String, date: Date }],
  in_date: { type: Date, default: Date.now },
  fine: Boolean,
  booklist: ObjectId
});

module.exports = transactions