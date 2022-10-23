const{BasketDevice} = require('../models/models')
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
            const {id} = req.query
            const qwe = await BasketDevice.destroy({
                where : {id}
            })
            return res.json(qwe)
        }
}

module.exports = new basketDeviceController()