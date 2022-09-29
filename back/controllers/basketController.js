const{Basket} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require("uuid");
const path = require("path");

const maxAge = 60 * 60 * 1000 * 24
const signed =true

class BasketController{
    async create(req, res,next){
        try{
            const id=(req.cookie)
            const basket = await Basket.create({id})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketController()