const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order')
const {auth, crud} = require('../middleware')

router.use(auth.checkToken, crud.restrictTo('pelanggan'))

router.post('/create', orderController.createOrder)
router.get('/', orderController.getUserOrder)

module.exports = router
