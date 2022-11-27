const Router = require('express')
const router = new Router()
const basketDeviceController = require('../controllers/basketDeviceController')

router.post('/add',basketDeviceController.add)
router.get('/get',basketDeviceController.getAll)
router.get('/delete',basketDeviceController.delete)
router.get('/expGet',basketDeviceController.ExpGet)
router.get('/plus',basketDeviceController.plusCount)
router.get('/minus',basketDeviceController.minusCount)
module.exports = router

