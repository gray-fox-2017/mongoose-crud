const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

const customer = require('../models/customer');

var createCustomer = ((req,res) => {
  let newCustomer = new customer({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  });
  newCustomer.save((err, createdCustomer) => {
    err ? res.send(err) : res.send(`Customer is successfully added.\n${createdCustomer}`);
  });
});

var showCustomers = ((req,res) => {
  customer.find((err, customers) => {
    err ? res.send(err) : res.send(customers);
  });
});

var showCustomer = ((req,res) => {
  let id = req.params.id;
  customer.find({_id: id}, (err, customer) => {
    err ? res.send(err) : res.send(customer);
  });
});

var updateCustomer = ((req,res) => {
  let id = req.params.id;
  customer.findById(id, (err, customer) => {
    if (err) res.send(err);
    else {
      customer.name = req.body.name || customer.name;
      customer.memberid = req.body.memberid || customer.memberid;
      customer.address = req.body.address || customer.address;
      customer.zipcode = req.body.zipcode || customer.zipcode;
      customer.phone = req.body.phone || customer.phone;
      customer.save((err, savedCustomer) => {
        err ? res.send(err) : res.send(`Customer is successfully updated.\n${savedCustomer}`);
      });
    }
  });
});

var deleteCustomer = ((req,res) => {
  let id = req.params.id;
  customer.findByIdAndRemove(id, (err,customer) => {
    err ? res.send(err) : res.send('Customer is deleted.');
  });
});

module.exports = {
  createCustomer,
  showCustomers,
  showCustomer,
  updateCustomer,
  deleteCustomer
};
