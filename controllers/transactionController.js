var Transaction = require('../models/transaction')
const methods = {}

//SHOW ALL TRANSACTION
methods.getAllTransactions = function(req,res){
  Transaction.find()
             .populate('keranjang id_pembeli', 'name title price')
             .exec(function(err,Transaction){
              if(err){
                console.log(err);
              }
              else{
                res.send(Transaction)
              }
            })
}// SHOW ALL TRANSACTION

//INSERT TRANSACTION
methods.insertTransaction = function(req,res){
  let tmp = []
  req.body.value.forEach(function(data){
    for(let i=0; i<data.jumlah; i++){
      tmp.push(data._id)
    }
  })
  var input = new Transaction({
    id_pembeli:'5923ee75ae8efe3170ea52ea',
    total_harga:req.body.totalharga,
    keranjang:tmp
  })
  input.save(function(err, input){
    if(err){
      res.send(err)
    }
    else{
      res.send(input)
    }
  })
}//INSERT TRANSACTION

//UPDATE TRANSACTION
methods.updateTransaction = function(req,res){
  let update = {
    memberid:req.body.memberid,
    days:req.body.days,
    fine:req.body.fine,
    booklist:req.body.booklist
  }

  Transaction.findByIdAndUpdate(req.params.id, update, {new:true}, function(err, result){
    if(!err){
      res.send('berhasil update data')
    }else{
      res.send(err)
    }
  })
}//UPDATE TRANSACTION


//DELETE TRANSACTION
methods.deleteTransaction = function(req,res){
  Transaction.findByIdAndRemove(req.params.id,function(err, result){
    if(!err){
      res.send('berhasil hapus data')
    }else{
      res.send(err)
    }
  })
}//DELETE TRANSACTION

methods.pushBookList = function(req,res){
  Transaction.findById(req.params.id, function(err, result){
    if(!err){
      // console.log('result',result.booklist);
      // console.log('idbuku',req.body.idbuku);
      result.booklist.push(req.body.idbuku)
      // console.log(result.booklist);
      let updateTransaction = {
        memberid:result.memberid,
        days:result.days,
        fine:result.fine,
        booklist:result.booklist
      }
      Transaction.findByIdAndUpdate(req.params.id, updateTransaction, {new:true}, function(error, data){
        if(!error){
          res.send(data)
        } else {
          res.send(error)
        }
      })
    } else{
      res.send(err)
    }
  })
}

module.exports = methods
