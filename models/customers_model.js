const mongoose = require('mongoose')

let customerSchema = mongoose.Schema({
  name : String,
  memberid : String,
  address : String,
  zipcode : String,
  phone : String
})

let customers = mongoose.model('customers', customerSchema)

module.exports = customers
