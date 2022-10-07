const uuid = require('uuid')
const path = require('path')
const{Device} = require('../models/models')
const ApiError = require('../error/ApiError')
class deviceController{
    async create(req, res,next){
        try{
        let {name, price, typeId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" 
        img.mv(path.resolve(__dirname,'..','static',fileName))
        const device = await Device.create({name,price,typeId,img: fileName})
        return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getALL(req, res){
        const {typeId} = req.query
        let devices;
        if(typeId){
            devices = await Device.findAll({where:{typeId}})
        }
        if(!typeId){
            devices = await Device.findAll()
        }
        return res.json(devices)
    }
    async getone(req,res){
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
        })
        return res.json(device)
    }
}

module.exports = new deviceController()