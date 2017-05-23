const Customers = require('../Models/customers.js')

function add (req,res,next){
  Customers.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  },function(err,result){
    res.send(`${req.body.name} Created!`)
  })
}

function read (req,res,next){
  Customers.find({},function(err,result){
    res.send(result)
  })
}

function remove (req,res,next){
  Customers.findOne({
    "_id": req.params.id
  },function(err,result){
    res.send(`${result.name} Deleted!`)
    Customers.remove({
      "_id": result._id
    })
  })
}

function search (req,res,next){
  Customers.findOne({
    "_id": req.params.id
  }, function(err,result){
    res.send(result)
  })
}

function update (req,res,next){
  Customers.findOne({
    "_id": req.params.id
  },function(err,result){
    res.send(`${result.name} Updated!`)
    Customers.updateOne({
      "_id": result._id
    },{
    $set:{
      name: req.body.name || result.name,
      memberid: req.body.memberid || result.memberid,
      address: req.body.address || result.address,
      zipcode: req.body.zipcode || result.memberid,
      phone: req.body.phone || result.phone
    }      
    })
  })
}



module.exports = {
  add,remove,search,read,update
}