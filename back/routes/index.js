const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const cookieRouter = require('./cookieRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const deviceList = require('./deviceListRouter')
const basketDevice = require('./basketDeviceRouter')
const mail = require("./mailRouter");
const DeleteRouter = require("./DeleteRouter");
router.use('/cookie',cookieRouter)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)
router.use('/deviceList', deviceList)
router.use('/basketDevice',basketDevice)
router.use('/mail',mail)
router.use('/delete',DeleteRouter)

module.exports = router