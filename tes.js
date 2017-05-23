var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Transaction = require('./models/transaction')
var Book = require('./models/book')

Transaction
.findOne({ _id: '5923ec7d02b1cb61b9399322' })
.populate('booklist')
.exec(function (err, trans) {
  if (err) return handleError(err);
  console.log('The book is %s', trans);
  // prints "The creator is Aaron"
});

Transaction.findOne({ _id: '5923ec7d02b1cb61b9399322' }, (err, res) => {
  console.log(res)
})