const Router = require('express')
const router = new Router()
const CookieController = require ("../controllers/cookieController")


router.post('/',CookieController.cookieCheck)
module.exports = router
