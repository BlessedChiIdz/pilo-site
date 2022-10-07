const Router = require('express')
const router = new Router()
const basketDeviceController = require('../controllers/basketDeviceController')


router.post('/create',basketDeviceController.create)
router.get('/get',basketDeviceController.get)

module.exports = router
