var Customer = require('../models/customer')
const methods = {}

// SHOW ALL CUSTOMER
methods.getAllCustomers = function(req,res){
  Customer.find(function(err,Customer){
    if(err){
      console.log(err);
    }
    else{
      res.send(Customer)
    }
  })
}// SHOW ALL CUSTOMER

//INSERT CUSTOMER
methods.insertCustomer = function(req,res){
  var input = new Customer({
    name:req.body.name,
    memberid:req.body.memberid,
    address:req.body.address,
    zipcode:req.body.zipcode,
    phone:req.body.phone
  })
  input.save(function(err, input){
    if(err){
      res.send(err)
    }
    else{
      res.send(input)
    }
  })
}//INSERT CUSTOMER

//UPDATE CUSTOMER
methods.updateCustomer = function(req,res){
  Customer.findById(req.params.id, function(err,result){
    var update = {
      name:req.body.name || result.name,
      memberid:req.body.memberid || result.memberid,
      address:req.body.address || result.address,
      zipcode:req.body.zipcode || result.zipcode,
      phone:req.body.phone || result.phone
    }
  })
  Customer.findByIdAndUpdate(req.params.id, update, {new:true}, function(err, result){
    if(!err){
      res.send('berhasil update data')
    }else{
      res.send(err)
    }
  })
}//UPDATE CUSTOMER

//DELETE CUSTOMER
methods.deleteCustomer = function(req,res){
  Customer.findByIdAndRemove(req.params.id,function(err, result){
    if(!err){
      res.send('berhasil hapus data')
    }else{
      res.send(err)
    }
  })
}//DELETE CUSTOMER

module.exports = methods
