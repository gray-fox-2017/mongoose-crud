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
    out_date: Date,
    due_date: Date,
    in_date: {
        type: Date,
        default: new Date()
    },
    fine: {
        type: Number,
        required: true,
        default: 0
    },
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
}) // transactionSchema

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction