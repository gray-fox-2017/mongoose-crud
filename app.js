var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var books = require('./routes/books')
var customers = require('./routes/customers')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', books)
app.use('/customers', customers)
// app.use('/', function(req, res) {
//   res.send('alive')
// })

app.listen(3000)