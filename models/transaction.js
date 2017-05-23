var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/libraries';
mongoose.connect(url);
//mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var TransactionsSchema = new Schema ({
  memberid: String,
  days: Number,
  outdate: {
    type: Date,
    default: Date.now
  },
  duedate: {
    type: Date,
    default: Date.now
  },
  indate: {
    type: Date,
    default: Date.now
  },
  fine: Number,
  booklist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Books'
    }
  ]
});

var Transactions = mongoose.model('Transactions', TransactionsSchema);

module.exports = Transactions;
