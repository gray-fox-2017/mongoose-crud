const Transactions = require('../Models/transactions.js')
const ObjectId = require('mongodb').ObjectID;
const Books = require('../Models/books')

function add (req,res,next){
  Books.findOne({
    "_id": req.body.booklist
  },function(err,result){
    let stock = result.stock
    if(stock === 0){
      res.send('Stock Buku Kosong Bro')
    }
    else{
      result.stock = stock -1
      result.save()
      
  Transactions.create({
    memberid: req.body.memberid,
    days: +req.body.days,
    out_date: new Date(),
    due_date: new Date(req.body.due_date),
    in_date: new Date(),
    fine: 0,
    booklist: req.body.booklist
  },function(err,data){
    if(err){
      console.log(err);
    }
    else{
      res.send(`Transaction Created!`)
        }  
      })
    }       
  })
}

function read (req,res,next){
  Transactions.find({})
  .populate("booklist")
  .exec(function(err,result){
    res.send(result)
  })  
}

function search (req,res,next){
  Transactions.findOne({
    "_id": ObjectId(req.params.id)
  })
  .populate('booklist')
  .exec(function(err,result){
    res.send(result)
  })
}

function remove (req,res,next){
  Transactions.remove({
    "_id": ObjectId(req.params.id)
  },function(err,result){
    res.send(`Delete Success!`)
  })
}

function addToCart (req,res,next){
  Transactions.findById(req.params.id,function(err,result){
    console.log(result.booklist);  
    
    result.booklist.push(req.body.booklist)
    result.save(function(err){
      res.send(`Book ID:${req.body.booklist} Added to cart!`) 
    })
      
    // let combine = result.booklist + "," + req.body.booklist
    // let split = combine.split(',')
    // Transactions.updateOne({
    //   "_id": result._id
    // },{
    //   $set:{      
    //     booklist: result.booklist.length < 1 ? req.body.booklist : result.booklist
    //   }
    // },function(err,result){
    //   res.send(`Book ID:${req.body.booklist} Added to cart!`)
    // })
  })
}

function update (req,res,next){  
  Transactions.findById(req.params.id,function (err,result){
    var now = new Date()
    var gap = now - result.due_date
    var days = gap / 1000 / 60 / 60 / 24 
    var totalfine = Math.floor(days) * 1000
    result.fine = totalfine
    result.in_date = new Date()
    result.save(function(err){
      if(err){
        console.log(err);
      }
      else{
        res.send(result)
      }    
    }) 
  })
}

module.exports = {
  add,read,search,remove,update,addToCart
}