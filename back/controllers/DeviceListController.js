const{deviceList} = require('../models/models')
const ApiError = require('../error/ApiError')
class deviceListController{
    async create(req, res,next){
        try{
            let {name, price, deviceId} = req.body
            const DeviceList = await deviceList.create({name,price,deviceId})
            return res.json(DeviceList)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getALL(req, res){
        const {deviceId} = req.query
        let DeviceList;
            DeviceList = await deviceList.findAll({where:{deviceId}})
        return res.json(DeviceList)
    }
    async getone(req,res){
        const {id} = req.params
        const DeviceList = await deviceList.findOne({
            where: {id},
        })
        return res.json(DeviceList)
    }
}

module.exports = new deviceListController()