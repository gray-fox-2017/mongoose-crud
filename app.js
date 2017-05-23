'use strict'
const express = require('express');
const bodyParser = require('body-parser');
let app = express();

const index = require('./routes');
const books = require('./routes/books');
const customers = require('./routes/customers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);

app.listen(5000, ()=> {
  console.log('server is listening at port 5000');
})
