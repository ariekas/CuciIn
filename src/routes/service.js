const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/service')

router.post('/create', serviceController.createService);
router.get('/', serviceController.getAllService);
router.put('/update/:id', serviceController.updateService);
router.delete('/delete/:id', serviceController.deleteService)

module.exports = router;