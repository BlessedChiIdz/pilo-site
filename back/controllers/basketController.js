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
        const cookie = req.cookies.cookieName;
        const basket = await Basket.findAll({where: {id_forCookie:cookie}})
        return res.json(basket)
    }
}

module.exports = new BasketController()