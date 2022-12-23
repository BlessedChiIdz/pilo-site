const mailer = require("../mail")
const {Basket} = require("../models/models");
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
    async cookieToUser(req,res){
        const {cook} = req.body
        if(cook === undefined || cook === 0 || cook ===""){
            console.log(req.cookies.cookieName)
            let m = {};
            let a = []; 
            const range = 2000000000; // максимальное значение (1..1000000 включительно)
            let count = 1;      // кол-во требуемых чисел
            for (let i = 0; i < count; ++i) {
                let r = Math.floor(Math.random() * (range - i));
                a.push(((r in m) ? m[r] : r) + 1);
                let l = range - i - 1;
                m[r] = (l in m) ? m[l] : l;
            }
            await res.cookie('cookieName', a[0], {maxAge: 1000 * 60 * 60 * 24 * 360, httpOnly: false});
            const {basket} = await Basket.findAll({
                where:{id_forCookie:a[0]}
            })
            if(basket===undefined){
                Basket.create({id_forCookie:a[0]})

            }
            else{
                console.log(basket)
            }
        }
        else{
            console.log(req.cookies.cookieName)
            console.log("yes cookie")
        }
        return res.json(0)
    }
}

module.exports = new MailController();