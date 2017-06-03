const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost/library_2')
mongoose.Promise = global.Promise;

let index = require('./routes')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index)

app.listen(3000, ()=> {
  console.log("listening on port 3000");
})
module.exports = app
