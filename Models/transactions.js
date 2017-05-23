const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TransactionSchema = new Schema({
  "memberid": String,
  "days" : Number,
  "out_date": Date,
  "due_date": Date,
  "in_date": Date,
  "fine": Number,
  "booklist": [{type: Schema.Types.ObjectId, ref: 'Book'}]
})

var Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction