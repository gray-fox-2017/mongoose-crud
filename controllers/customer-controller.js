'use strict'
var Customer = require('../models/customers')

var findAll = (req, res) => {
  Customer.find({})
  .then((customers)=>{
    res.send(customers)
  })
  .catch((err)=>{res.send(err)})
}

var newCustomer = (req, res) => {
  Customer.create(req.body)
  .then(()=>{
    res.send('New Customer has been added')
  })
  .catch((err)=>{res.send(err)})
}

var deleteCustomer = (req, res) => {
  let id = req.params.id
  Customer.deleteOne({_id: id})
  .then(()=>{
    res.send('Customer has been deleted')
  })
  .catch((err)=>{res.send(err)})
}

var getOneCustomer = (req, res) => {
  let id = req.params.id
  Customer.find({_id: id})
  .then((customer)=>{
    res.send(customer)
  })
  .catch((err)=>{res.send(err)})
}

var updateCustomer = (req, res) => {
  let id = req.params.id
  Customer.update({_id: id}, req.body)
  .then(()=>{
    res.send('customer has been updated')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = {
  findAll,
  newCustomer,
  deleteCustomer,
  getOneCustomer,
  updateCustomer
}
