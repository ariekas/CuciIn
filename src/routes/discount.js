const express = require('express')
const router = express.Router()
const discountController = require('../controllers/discount')
const {auth, crud} = require('../middleware')

router.use(auth.checkToken, crud.restrictTo('admin'))

router.get('/', discountController.getAllDiscount)
router.post('/create', discountController.createDiscount)

module.exports = router