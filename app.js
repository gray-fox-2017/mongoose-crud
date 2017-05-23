const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

var books = require('./routes/books')
var customers = require('./routes/customers')
var transactions = require('./routes/transactions')

mongoose.connect('mongodb://localhost/27017/library_mongoose', (err)=>{
  if(!err){
    console.log("connection success");
  } else {
    console.log(err);
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/books', books)
app.use('/customers', customers)
app.use('/transactions', transactions)

app.listen(3000)
