const{Basket} = require('../models/models')
const ApiError = require('../error/ApiError')

const maxAge = 60 * 60 * 1000 * 24
const signed =true

class BasketController{
    async getOne(req,res,next){
        let basket
        try {
            if (req.signedCookies.Basket) {
                basket = await Basket.getOne(parseInt(req.signedCookies.Basket.id))
            } else {
                basket = await Basket.create()
            }
            res.cookie('basketId', basket.id, {maxAge, signed})
            res.json(basket)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async append(req, res, next) {
        try {
            let basketId
            if (!req.signedCookies.Basket.id) {  //Basket id возможно нужно получать из res
                let created = await Basket.create()
                basketId = created.id
            } else {
                basketId = parseInt(req.signedCookies.Basket.id)
            }
            const {productId, quantity} = req.params
            const basket = await Basket.append(basketId, productId, quantity)
            res.cookie('basketId', basket.id, {maxAge, signed})
            res.json(basket)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async increment(req, res, next) {
        try {
            let basketId
            if (!req.signedCookies.Basket.id) {
                let created = await Basket.create()
                basketId = created.id
            } else {
                basketId = parseInt(req.signedCookies.B)
            }
            const {productId, quantity} = req.params
            const basket = await Basket.increment(basketId, productId, quantity)
            res.cookie('basketId', basket.id, {maxAge, signed})
            res.json(basket)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async decrement(req, res, next) {
        try {
            let basketId
            if (!req.signedCookies.basketId) {
                let created = await BasketModel.create()
                basketId = created.id
            } else {
                basketId = parseInt(req.signedCookies.basketId)
            }
            const {productId, quantity} = req.params
            const basket = await BasketModel.decrement(basketId, productId, quantity)
            res.cookie('basketId', basket.id, {maxAge, signed})
            res.json(basket)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async remove(req, res, next) {
        try {
            let basketId
            if (!req.signedCookies.basketId) {
                let created = await BasketModel.create()
                basketId = created.id
            } else {
                basketId = parseInt(req.signedCookies.basketId)
            }
            const basket = await BasketModel.remove(basketId, req.params.productId)
            res.cookie('basketId', basket.id, {maxAge, signed})
            res.json(basket)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }

    async clear(req, res, next) {
        try {
            let basketId
            if (!req.signedCookies.basketId) {
                let created = await BasketModel.create()
                basketId = created.id
            } else {
                basketId = parseInt(req.signedCookies.basketId)
            }
            basket = await BasketModel.clear(basketId)
            res.cookie('basketId', basket.id, {maxAge, signed})
            res.json(basket)
        } catch(e) {
            next(AppError.badRequest(e.message))
        }
    }



}

module.exports = new BasketController()