const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.post('/create',basketController.create)
router.get('/get',basketController.get)
router.get('/check',basketController.check)
module.exports = router
