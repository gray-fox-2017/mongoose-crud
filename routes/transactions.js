const express = require ('express')
const router = express.Router()
const controller = require('../Controllers/controller-transactions.js')

router.get('/', controller.read)
router.get('/:id', controller.search)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)
router.post('/', controller.add)
router.patch('/:id', controller.addToCart)

module.exports = router