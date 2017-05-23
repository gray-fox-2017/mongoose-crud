'use strict'
const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');
let app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
mongoose.Promise = global.Promise;

const index = require('./routes');
const books = require('./routes/books');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions);

app.listen(5000, ()=> {
  console.log('server is listening at port 5000');
})
