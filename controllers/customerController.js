var Customer = require('../models/customer')

var createCustomer = function(req, res) {
  Customer.create(req.body, (err, cust) => {
    if(err) res.send(err)
    res.send(cust)
  })
}

var getCustomers = function(req, res) {
  Customer.find({}, function (err, custs) {
    res.send(custs)
  });
}

var getOneCustomer = function(req, res) {
  Customer.find({_id: req.params.id}, (err, cust) => {
    res.send(cust)
  })
}

var updateCustomer = function(req, res) {
  Customer.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, cust) => {
    if(err) res.send(err)
    res.send(cust)
  })
}

var removeCustomer = function(req, res) {
  Customer.findOneAndRemove({_id: req.params.id}, (err, cust) => {
    if(err) res.send(err)
    res.send(cust)
  })
}

module.exports = {
  createCustomer, getCustomers, getOneCustomer, updateCustomer, removeCustomer
};