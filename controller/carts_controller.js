var Transaktion= require('../models/carts_models')

var getAllCart = (req, res, next)=>{
  Transaktion.find({})
  .populate('list_item')
  .exec((err, documents)=>{
   if(err){
      res.send(err)
   }else{
      res.send(documents)
   }
  })
}

var getOneCart = (req, res)=>{
 Transaktion.findOne({_id : req.params.id})
 .populate('list_item')
 .exec((err, result)=>{
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
 })
}

var insertCart = (req, res, next)=>{
 var insertTransaksi = new Transaktion({
    invoice : req.body.invoice,
    customer_id : req.body.customer_id,
    list_item : req.body.list_item
 })
 insertTransaksi.save((err, documents)=>{
    if(err){
      res.send(err)
    }else{
      res.send(documents)
    }
 })
}

var deleteCart = (req, res, next)=>{
  Transaktion.remove({_id : req.params.id}, (err, documents)=>{
   if(err){
      res.send(err)
   }else{
      res.send(documents)
   }
  })
}


var updateCart = (req, res, next)=>{
  Transaktion.findById(req.params.id, (err, record) => {

   if (err) {
        res.send(err)
   } else {
        Transaktion.update({
           _id: query._id
        }, {
           $set: {
                invoice : req.body.invoice || record.invoice,
                customer_id : req.body.customer_id || record.customer_id,
                list_item : req.body.list_item || record.list_item
           }
     }, (err, documents) => {
           if (err) res.send(err)
           res.send(documents)
        })
   }

  })
}


var addBooklist = (req, res, next)=>{
  Transaktion.findById(req.params.id, (err, data) => {
   if (err){
      res.send(err)
   }
   else{
      var list = data.list_item
      list.push(req.body.list_item)
      Transaktion.updateOne({
        _id: data._id
      }, {
        $set: {
          list_item : list
        }
   }, (err, documents) => {
        if (err) res.send(err)
        res.send(documents)
      })
   }
  })
}


module.exports = {
     getAllCart,
     getOneCart,
     insertCart,
     deleteCart,
     updateCart,
     addBooklist
}
