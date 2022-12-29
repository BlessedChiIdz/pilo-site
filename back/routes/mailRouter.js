const Router = require('express')
const MailController = require("../controllers/mailController");
const router = new Router()


// router.post('/post', function (req,res){
//     mailController.send
// })
router.post('/post', MailController.send)

module.exports = router