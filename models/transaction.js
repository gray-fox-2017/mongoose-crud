const mongoose = require('mongoose')
let Schema = mongoose.Schema

let transactionSchema = new Schema({
    memberid: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    out_date: {
        type: String,
        default: new Date().toISOString()
    },
    due_date: {
        type: String,
        default: new Date().toISOString()
    },
    in_date: {
        type: String,
        default: new Date().toISOString()
    },
    fine: {
        type: Number,
        required: true
    },
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
}) // transactionSchema

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction