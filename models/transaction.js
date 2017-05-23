var mongoose = require('mongoose');
Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
    memberid: String,
    days: String,
    out_date: { type: Date, default: Date.now },
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction  = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;