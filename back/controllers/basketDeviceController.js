const{BasketDevice} = require('../models/models')
const ApiError = require("../error/ApiError");

class basketDeviceController{
        async add(req,res){
        const {basketId,deviceId} = req.body
            const  basket_device = BasketDevice.create({basketId,deviceId})
            return res.json(basket_device)
        }
        async findAll(req,res){
            const {basketId} = req.query
            const basket_device=BasketDevice.findAll({
                where:{basketId,deviceId}
            })
            return res.json(basket_device)
        }
        async delete(req,res){

        }
}

export default BasketDeviceController;