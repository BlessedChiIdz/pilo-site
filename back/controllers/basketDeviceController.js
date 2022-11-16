const{BasketDevice, Basket} = require('../models/models')
const ApiError = require("../error/ApiError");

class basketDeviceController{
        async add(req,res){
        const {Count,basketId,deviceListId} = req.body
            const  basketDevice = await BasketDevice.create({Count:Count,basketId,deviceListId})
            return res.json(basketDevice)
        }
        async getAll(req,res){
            const {basketId} = req.query
            const basket_device = await BasketDevice.findAll({
                where:{basketId:basketId}
            })
            return res.json(basket_device)
        }
        async delete(req,res){
            const id = req.query
            const qwe = await BasketDevice.destroy({
                where : id
            })
            return res.json(qwe)
        }
        async ExpGet(req,res){
            let {id_forCookie} = req.query;
            const basketzxc = await Basket.findAll(
                {
                    where: {id_forCookie},
                },
            )
            const basket_device = await BasketDevice.findAll({
                where:{basketId:basketzxc[0].id}
            })
            return res.json(basket_device)
        }

}

module.exports = new basketDeviceController()