const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.get('/',basketController.set)
router.get('/qwe',basketController.get)

module.exports = router