const Router = require('express')
const router = new Router()
const deviceList = require('../controllers/DeviceListController')

router.post('/',deviceList.create)
router.get('/',deviceList.getALL)
router.get('/getById',deviceList.getById)


module.exports = router