const{BasketDevice, Basket, Device, deviceList} = require('../models/models')
const ApiError = require("../error/ApiError");
const {json} = require("express");

class basketDeviceController{
        async add(req,res){
        const {Count,basketId,deviceListId} = req.body
            const  basketDevice = await BasketDevice.create({Count:Count,basketId,deviceListId})
            return res.json(basketDevice)
        }
        async getAll(req,res){
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
            if(basketzxc !=0) {
                const basket_device = await BasketDevice.findAll({
                    where: {basketId: basketzxc[0].id}
                })
                let finalDevice = await Promise.all(basket_device.map(async (device) => {
                        let anime = await deviceList.findAll({
                            where: {id: device.deviceListId}
                        },)
                        return (anime)
                    })
                )
                console.log(finalDevice.length)

                let i = 0
                while (basket_device[i] != undefined) {
                    finalDevice[i][0].dataValues.Count = basket_device[i].Count
                    finalDevice[i][0].dataValues.idForDelete = basket_device[i].id
                    finalDevice[i][0].dataValues.finalPrice = basket_device[i].Count * finalDevice[i][0].price
                    i++
                }
                //console.log(finalDevice[0][0].dataValues)
                // finalDevice[0][0].dataValues.Count=1

                // let finalDevice = await deviceList.findAll({
                //     where:{id:6}
                // })
                //  basket_device.map(device=>console.log(device.deviceListId))
                let clothNameItem = {}
                if(finalDevice.length !== 0){
                 clothNameItem = await Device.findOne(
                    {
                        where: {id:finalDevice[0][0].dataValues.deviceId},
                    },
                )
                finalDevice[0][0].dataValues.clothName = clothNameItem.dataValues.name
                }
                return res.json(finalDevice)
            }
        }
        async plusCount(req,res){
        const id = req.query
        const prevCount = await BasketDevice.findAll({
            where : id
        })
          let finalCount = prevCount[0].Count + 1
          const qwe = await BasketDevice.update(
            {Count: finalCount},
            {where:id}
        )
            return res.json(0)
    }

        async minusCount(req,res){
            const id = req.query
            const prevCount = await BasketDevice.findAll({
                where : id
            })
            let finalCount = prevCount[0].Count - 1
            const qwe = await BasketDevice.update(
                {Count: finalCount},
                {where:id}
            )
            return res.json(0)
    }

}

module.exports = new basketDeviceController()