const{Basket} = require('../models/models')
cookieParser = require('cookie-parser');
class BasketController{
    async set(req, res) {
        const cookie = req.cookies.cookieName;
        const basket = Basket.create({id:cookie})
        return res.json(basket)
    }
    async get(req,res){
        const cookie = req.cookies.cookieName;
        const basket = await Basket.findAll({where: {id:cookie}})
        return res.json(basket)
    }
}

module.exports = new BasketController()