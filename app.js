var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var index = require('./routes/index');
var customers = require('./routes/customers');
var books = require('./routes/books')
var transactions = require('./routes/transactions')
const uri = 'mongodb://books:books@ds149491.mlab.com:49491/mongoosecrud';
mongoose.connect(uri);

const db = mongoose.createConnection(uri);


var app = express();

// view engine setup
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/books', books)
app.use('/customers', customers);
app.use('/transactions', transactions)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
module.exports = app;
