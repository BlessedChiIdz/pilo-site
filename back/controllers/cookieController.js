const {Basket} = require("../models/models");

class CookieController{
    async cookieCheck(req,res){
        let basket
        let id_forCookie = req.cookies.CookForBasket
        if(id_forCookie === undefined){
            let m = {};
            let a = [];
            const range = 2000000000;
            let count = 1;
            for (let i = 0; i < count; ++i) {
                let r = Math.floor(Math.random() * (range - i));
                a.push(((r in m) ? m[r] : r) + 1);
                let l = range - i - 1;
                m[r] = (l in m) ? m[l] : l;
            }
            res.cookie('CookForBasket', a[0], {maxAge: 1000 * 60 * 60 * 24 * 360, httpOnly: false});
            basket = await Basket.findAll({
                where:{id_forCookie:a[0]}
            })
            if(basket===undefined || basket.length === 0){
                basket = await Basket.create({id_forCookie: a[0]})
            }
         }
        else{
            basket = await Basket.findOne(
                {
                    where: {id_forCookie},
                },
            )
            if(basket===undefined || basket.length === 0 ){
                basket = await Basket.create({id_forCookie: id_forCookie})
            }
        }

        return res.json(basket)
    }
}

module.exports = new CookieController()