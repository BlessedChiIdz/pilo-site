const {Basket} = require("../models/models");

class CookieController{
    async cookieCheck(req,res){
        let basket
        let id_forCookie = req.cookies.cookieName
        console.log(id_forCookie)
        if(id_forCookie === undefined){
            let m = {};
            let a = [];
            const range = 2000000000; // максимальное значение (1..2000000 включительно)
            let count = 1;      // кол-во требуемых чисел
            for (let i = 0; i < count; ++i) {
                let r = Math.floor(Math.random() * (range - i));
                a.push(((r in m) ? m[r] : r) + 1);
                let l = range - i - 1;
                m[r] = (l in m) ? m[l] : l;
                console.log(req.cookies.cookieName)
            }
            res.cookie('cookieName', a[0], {maxAge: 1000 * 60 * 60 * 24 * 360, httpOnly: true});
            basket = await Basket.findAll({
                where:{id_forCookie:a[0]}
            })
            console.log(basket)
            if(basket===undefined || basket.length === 0){
                basket = await Basket.create({id_forCookie: a[0]})
                console.log("create new basket")
            }
        }
        else{
            basket = await Basket.findAll(
                {
                    where: {id_forCookie},
                },
            )
            console.log(basket)
            if(basket===undefined || basket.length === 0 ){
                basket = await Basket.create({id_forCookie: id_forCookie})
                console.log("create new basket")
            }
        }

        return res.json(basket)
    }
}

module.exports = new CookieController()