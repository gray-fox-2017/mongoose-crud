var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const dbTransaction = require('../models/transactions_model.js')


var add = function(req, res) {
  let date = new Date()
  var query = {memberid: req.body.memberid,
               days: parseInt(req.body.days),
               out_date : date,
               due_date: date.setDate(date.getDate() + parseInt(req.body.days)),
               fine: req.body.fine,
               booklist: req.body.booklist}
               
  console.log("================================1");
  console.log(query);
  dbTransaction.create(query, function(err, transactions) {
    console.log("kampret");
    if(!err) res.send(transactions)
    else if (err) res.send(err)
  })
}

var getAll = function(req, res) {
  dbTransaction.find({}).populate('booklist').exec(function(err, transactions) {
    if(!err) {
      res.send(transactions)
    } else {
      res.send(err)
    }
  })
}

var getById = function(req, res) {
  let id = req.params._id
  var query = {_id : id}
  dbTransaction.findById(query, function(err, transactions) {
    if(!err) res.send(transactions)
    else if (err) res.send(err)
  })
}

var remove = function(req, res) {
  let id = req.params._id
  var myquery = {_id : id}
  dbTransaction.remove(myquery, function(err, customer) {
    if(!err) {
      console.log(customer);
      res.send(`customer success deleted!`)
    } else {
      res.send(err)
    }
  })
}

var edit = function(req, res) {
  let id = req.params._id
  var query_find = {_id : id}
  dbTransaction.findOne(query_find, function(err, customer) {
    console.log(customer);
    if (err) throw err;
    var query_set = { name : customer.name,
                    memberid: customer.memberid,
                    address: customer.address,
                    zipcode : customer.zipcode,
                    phone: customer.phone };
    var newvalues = { name : req.body.name || customer.name,
                      memberid: req.body.memberid || customer.memberid,
                      address: req.body.address || customer.address,
                      zipcode : req.body.zipcode || customer.zipcode,
                      phone : req.body.phone || customer.phone};

    dbTransaction.update(query_set, newvalues, function(err, result) {
      if (err) throw err;
      res.send(result.nModified + " record updated")
    })
  })
}

module.exports = {
  router,
  add,
  remove,
  edit,
  getAll,
  getById
};