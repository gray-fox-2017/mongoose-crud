const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
  memberid: { type:String },
  days: { type: Number },
  out_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now },
  in_date: { type: Date, default: Date.now },
  fine: { type: Number },
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books' }]
})

let transactions = mongoose.model("transactions", transactionSchema)

module.exports = transactions
