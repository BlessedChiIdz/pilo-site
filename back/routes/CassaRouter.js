const Router = require('express')
const router = new Router()
const cassaController = require('../controllers/cassaController')


router.post('/create-payment', cassaController.createPayment)
router.post('/webhook', cassaController.webHook)
module.exports = router
