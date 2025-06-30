const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const { auth } = require('../middleware')

router.post('/login', authController.login)
router.post('/register',auth.checkField, authController.register)

module.exports = router