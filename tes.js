var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var Transaction = require('./models/transaction')
var Book = require('./models/book')

var tes = new Book({
  title: 'a'
});

var error = tes.validateSync()

console.error(error.errors.title.message)