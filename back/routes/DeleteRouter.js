const Router = require('express')
const router = new Router()
const DeleteController = require("../controllers/DeleteController");

router.get('/type',DeleteController.DeleteType)
router.get('/device',DeleteController.DeleteDevice)
router.get('/podDev',DeleteController.DeletePodDev)
module.exports = router