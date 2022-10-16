const{BasketDevice} = require('../models/models')
const ApiError = require("../error/ApiError");

class basketDeviceController{
        async add(req,res){
        const {basketId,deviceListId} = req.body
            const  basketDevice = await BasketDevice.create({basketId,deviceListId})
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

        }
}

module.exports = new basketDeviceController()