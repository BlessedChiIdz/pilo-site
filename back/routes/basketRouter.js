const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')



router.get('/getOne',basketController.getOne)
router.post('/',basketController.append)
router.post('/',basketController.increment)
router.post('/',basketController.decrement)
router.post('/',basketController.remove)
router.post('/clear',basketController.clear)

module.exports = router