const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.post('/create',basketController.create)
router.get('/get',basketController.get)

module.exports = router
