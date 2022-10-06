const{BasketDevice} = require('../models/models')
const ApiError = require("../error/ApiError");

class basketDeviceController{
        async create(req,res){
        const {basketId,deviceId} = req.body
            const  basketDevice = BasketDevice.create({basketId,deviceId})
            return res.json(basketDevice)
        }
}

export default BasketDeviceController;