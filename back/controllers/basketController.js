const{Basket} = require('../models/models')
const ApiError = require("../error/ApiError");
cookieParser = require('cookie-parser');
class BasketController{
    async get(req,res){
        let {id_forCookie} = req.query;
        const basket = await Basket.findAll(
            {
                where: {id_forCookie},
            },
        )
        return res.json(basket)
    }
}

module.exports = new BasketController()