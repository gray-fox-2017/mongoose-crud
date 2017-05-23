const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TransactionSchema = new Schema({
  "memberid": String,
  "days" : Number,
  "out_date": {
    type: String,
    default:new Date().toISOString()
  },
  "due_date": {
    type: String,
    default:new Date().toISOString()
  },
  "in_date":{
    type: String,
    default:new Date().toISOString()
  },
  "fine": Number,
  "booklist": [{type: Schema.Types.ObjectId, ref: 'Book'}]
})

var Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction