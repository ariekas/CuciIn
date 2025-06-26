const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/service')

router.post('/create', serviceController.createService);
router.get('/', serviceController.getAllService);

module.exports = router;