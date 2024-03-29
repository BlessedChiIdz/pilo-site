const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/',deviceController.create)
router.get('/',deviceController.getALL)
router.get('/:id',deviceController.getone)

module.exports = router