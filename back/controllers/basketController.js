const{Basket} = require('../models/models')
const ApiError = require("../error/ApiError");
cookieParser = require('cookie-parser');
class BasketController{
    async create(req, res,next) {
        try {
        const cookie = req.cookies.cookieName;
        const basket = await Basket.create({id_forCookie:cookie})
        return res.json(basket)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req,res){
        let {id_forCookie} = req.query;
        const basket = await Basket.findAll(
            {
                where: {id_forCookie},
            },
        )
        return res.json(basket)
    }
    async check(req,res){
        const cookie = req.cookies.cookieName;
        return res.json(Number(cookie))
    }
}

module.exports = new BasketController()