const express = require('express')
const router = express.Router();
var Transaktion= require('../controller/transaksi_controller')

router.get('/', Transaktion.getAllTransaksi);
router.get('/:id', Transaktion.getOneTransaksi);
router.post('/', Transaktion.insertTransaksi);
router.patch('/:id', Transaktion.updateTransaksi)
router.delete('/:id', Transaktion.deleteTransakti);
router.patch('/:id', Transaktion.addBooklist)

module.exports = router;
