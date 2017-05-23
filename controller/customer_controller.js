var Customer= require('../models/customers_models')

var findAllCustomer = (req,res,next) =>{
     Customer.find({ }, function (err, docs) {
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     });
}

var findOneCustomer = (req,res,next) =>{
     Customer.findOne({ _id : req.params.id}, function (err, docs) {
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     });
}

var InsertCustomer = (req,res,next) =>{
     var insert = new Customer ({
          name: req.body.name,
          memberid:   req.body.memberid,
          address: req.body.address,
          zipcode: req.body.zipcode,
          phone: req.body.phone
     })
     insert.save((err, documents)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(documents)
          }
     })
}


var deleteCustomer = (req,res,next) =>{
     Customer.remove({_id:req.params.id}, (err, documents)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(documents)
          }
     })
}


var updateCustomer = (req, res)=>{
 Customer.findById(req.params.id, (err, data) => {
    if (err) res.send(err)
    Customer.updateOne({
      _id: data._id
    }, {
      $set: {
      name: req.body.name || data.name,
      memberid:   req.body.memberid || data.memberid,
      address: req.body.address || data.address,
      zipcode: req.body.zipcode || data.zipcode,
      phone: req.body.phone || data.phone,
     createdAt : data.createdAt,
     updateAt : new Date().toISOString()
      }
    }, (err, result) => {
      if (err) res.send(err)
      res.send(result)
    })
 })
}


module.exports = {
  findAllCustomer,
  findOneCustomer,
  InsertCustomer,
  updateCustomer,
  deleteCustomer
}
