var Customer = require('../models/customer')

var methods = {}

methods

methods.insert = (req, res) => {
  Customer.create(req.body, (err, customer) => {
    if(err) res.send(err)
    res.send(customer)
  })
}

methods.findAll = (req, res) => {
  Customer.find({}, (err, customers) => {
    if(err) res.send(err)
    res.send(customers)
  })
}

methods.findById = (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if(err) res.send(err)
    res.send(customer)
  })
}

methods.update = (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if(err) res.send(err)
    customer.name = req.body.name || customer.name
    customer.memberid = req.body.memberid || customer.memberid
    customer.address = req.body.address || customer.address
    customer.zipcode = req.body.zipcode || customer.zipcode
    customer.phone = req.body.phone || customer.phone
    customer.save((err, saved) => {
      if(err) res.send(err)
      res.send(saved)
    })
  })
}

methods.delete = (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if(err) res.send(err)
    customer.remove(err => {
      res.send({message: `Customer with id: ${customer._id} has been deleted`})
    })
  })
}

module.exports = methods
