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

module.exports = methods