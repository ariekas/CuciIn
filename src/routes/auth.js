const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const { auth } = require('../middleware')

router.post('/login', auth.checkToken, authController.login)
router.post('/register', auth.validateField, authController.register)

module.exports = router