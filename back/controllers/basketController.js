const{Basket} = require('../models/models')
const ApiError = require("../error/ApiError");
cookieParser = require('cookie-parser');
class BasketController{
    async get(req,res){
        let {id_forCookie} = req.query;
        let basket
        if(id_forCookie === undefined){
            new Promise(function (resolve, reject){
                let m = {};
                let a = [];
                const range = 2000000000; // максимальное значение (1..2000000 включительно)
                let count = 1;      // кол-во требуемых чисел
                for (let i = 0; i < count; ++i) {
                    let r = Math.floor(Math.random() * (range - i));
                    a.push(((r in m) ? m[r] : r) + 1);
                    let l = range - i - 1;
                    m[r] = (l in m) ? m[l] : l;
                }
                res.cookie('cookieName', a[0], {maxAge: 1000 * 60 * 60 * 24 * 360, httpOnly: true});
                console.log(1)
            }).then(function (){
                basket =  Basket.findAll({
                    where:{id_forCookie:a[0]}
                })
                console.log(1)
                console.log(basket)
            }).then(function (){
                if(basket===undefined){
                    basket =  Basket.create({id_forCookie: a[0]})
                    console.log("create new basket")
                }
            })
        }   else{
                basket = await Basket.findAll(
                    {
                        where: {id_forCookie},
                    },
                )
        }
        return res.json(basket)
    }
}

module.exports = new BasketController()