const express = require('express')
const router = express.Router();
var Transaktion= require('../controller/carts_controller')

router.get('/', Transaktion.getAllCart);
router.get('/:id', Transaktion.getOneCart);
router.post('/', Transaktion.insertCart);
router.patch('/:id', Transaktion.updateCart)
router.delete('/:id', Transaktion.deleteCart);
router.patch('/:id', Transaktion.addBooklist)

module.exports = router;
