const mailer = require("../mail")
class MailController{
    async send(req,res){
        console.log(0)

        const {text} = req.body
        const message = {
            from: '<rik232004@mail.ru>',
            to: "nodemailer51@mail.ru",
            subject: 'Order',
            text:text
        }
        await mailer(message)
        return res.json(0)
    }
}

module.exports = new MailController();