const Customer = require('../models/customers_model')

module.exports = {
  insert : function(req, res) {
    Customer.create( req.body, function(err, data) {
      err ? res.json({ err }) : res.json( data )
    })
  },
  findAll : function(req, res) {
    Customer.find( {}, function(err, data) {
      err ? res.json({ err }) : res.json( data )
    })
  },
  findById : function(req, res) {
    Customer.findById( req.params.id, function(err, data) {
      err ? res.json({ err }) : res.json( data )
    })
  },
  deleteById : function(req, res) {
    Customer.findByIdAndRemove( req.params.id, function(err, data) {
      err ? res.json({ err }) : res.json( data )
    })
  },
  updateById : function(req, res) {
    Customer.findById( req.params.id, function(err, data) {
      if(err){
        res.json({err})
      } else {
        Customer.update({_id : req.params.id}, {
          $set:{
            name:req.body.name || data.name,
            memberid:req.body.memberid || data.memberid,
            address:req.body.address || data.address,
            zipcode:req.body.zipcode || data.zipcode,
            phone:req.body.phone || data.phone
          }
        }, function( err, data ){
          err ? res.json({ err }) : res.json(data)
        })
      }
    })
  }
}
