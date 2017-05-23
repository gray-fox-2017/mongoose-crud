const Customers = require('../models/customers_model');

function getAll(req, res) {
  Customers.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Customers.find({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following record:");
    console.log(result);
    res.send(result);
  });
}

function createBook(req, res) {
  Customers.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteBook(req, res) {
  Customers.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

function updateBook(req, res) {
  Customers.find({
    _id: req.params.id
  }, function(err, result) {
    Customers.update({
      _id: result[0]._id
    }, {
      $set: {
        name: req.body.name || result[0].name,
        memberid: req.body.memberid || result[0].memberid,
        address: req.body.address || result[0].address,
        zipcode: req.body.zipcode || result[0].zipcode,
        phone: req.body.phone || result[0].phone
      }
    }, (err, result) => {
      if (err) return res.send(err)
        res.send(result);
    });
  });
}

module.exports = {
  getAll, getSingle, createBook, deleteBook, updateBook
}
