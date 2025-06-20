const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getUser)
router.post('/create', userController.createUser)
router.put('/update/:id', userController.editUser)


module.exports = router