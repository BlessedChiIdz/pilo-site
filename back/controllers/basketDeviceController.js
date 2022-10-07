const{BasketDevice} = require('../models/models')
const ApiError = require("../error/ApiError");

class basketDeviceController{
        async create(req,res){
        const {basketId,deviceId} = req.body
            const  basket_device = BasketDevice.create({basketId,deviceId})
            return res.json(basket_device)
        }
        async findone(req,res){
            const {deviceId} = req.query
            const basket_device=BasketDevice.findOne({
                where:{basketId,deviceId}
            })
            return res.json(basket_device)
        }
        async findAll(req,res){
            const {basketId} = req.query
            const basket_device=BasketDevice.findAll({
                where:{basketId,deviceId}
            })
            return res.json(basket_device)
        }
}

export default BasketDeviceController;