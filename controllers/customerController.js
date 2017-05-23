let Customer = require('../models/customer')
let methods = {}

methods.insertOne = (req, res) => {
  let newCustomer = new Customer({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })

  newCustomer.save((err, record) => {
    if (err) res.send(err)
    console.log('InserOne customer success');
    res.send(record)
  })
}

methods.getAll = (req, res) => {
  Customer.find({}, (err, records) => {
    if (err) res.send(err)
    console.log('GetAll customers success');
    res.send(records)
  })
}

methods.getById = (req, res) => {
  Customer.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById customer success');
    res.send(record)
  })
}

methods.updateById = (req, res) => {
  Customer.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById customer success');
    Customer.updateOne({
      "_id": record._id
    }, {
      $set: {
        "name": req.body.name || record.name,
        "memberid": req.body.memberid || record.memberid,
        "address": req.body.address || record.address,
        "zipcode": req.body.zipcode || record.namzipcodee,
        "phone": req.body.phone || record.phone
      }
    }, (err, response) => {
      if (err) res.send(err)
      console.log('UpdateById customer success');
      res.send(record)
    })
  })
}

methods.deleteById = (req, res) => {
  Customer.findById(req.params.id, (err, record) => {
    if (err) res.send(err)
    console.log('GetById customer success');
    Customer.deleteOne({
      "_id": record._id
    }, (err, response) => {
      if (err) res.send(err)
      console.log('DeleteById customer success');
      res.send(record)
    })
  })
}

module.exports = methods