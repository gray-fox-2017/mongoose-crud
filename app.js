const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// const index = require('./routes');
const books = require('./routes/books');
const transactions = require('./routes/transactions');
const customers = require('./routes/customers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books',books);
app.use('/transactions',transactions);
app.use('/customers',customers);

app.listen(3000,()=>{console.log('server is listening at port 3000')});