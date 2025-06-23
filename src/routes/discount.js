const express = require('express')
const router = express.Router()
const discountController = require('../controllers/discount')
const restrictTo = require('../middleware/auth/restrictTo')

router.use(auth)