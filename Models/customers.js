const mongoose = require('mongoose')
const Schema = mongoose.Schema

var CustomersSchema = new Schema({
  "name": String,
  "memberid": String,
  "address": String,
  "zipcode": Number,
  "phone": Number
})

var Customer = mongoose.model('Customer', CustomersSchema)

module.exports = Customer
