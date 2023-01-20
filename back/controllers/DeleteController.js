const {Type, Device, deviceList} = require("../models/models");
cookieParser = require('cookie-parser');
class DeleteController{
    async DeleteType(req,res){
        const {id} = req.query
        let type
        type = await Type.findAll(
            {
                where: {id},
            },
        )
        let typeId = type[0].id
        let devices
        devices = await Device.findAll({where:{typeId}})
        devices.map((device)=>{
            let deviceId = device.id
            deviceList.destroy({
                where:{deviceId}
            })
        })
        await Device.destroy({where:{typeId}})
        await Type.destroy({where:{id}})
        return res.json(1)
     }
     async DeleteDevice(req,res){
        const {id} = req.query
         let devices
         devices = await Device.findAll(
             {
                 where:{id},
             }
         )
         let deviceId = devices[0].id
         await deviceList.destroy({
             where:{deviceId}
         })
         await Device.destroy({
             where:{id}
         })
         return res.json(1)
     }
     async DeletePodDev(req,res){
        const {id} = req.query
         let podDev
         podDev = await deviceList.destroy({where:{id}})
         return res.json(1)
     }
}

module.exports = new DeleteController()