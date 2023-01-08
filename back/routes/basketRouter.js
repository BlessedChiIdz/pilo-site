const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.get('/get',basketController.get)
module.exports = router
