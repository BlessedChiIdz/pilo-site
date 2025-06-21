const{BasketDevice, Basket, Device, deviceList, Orders} = require('../models/models')
const ApiError = require("../error/ApiError");
const {json} = require("express");
const {where} = require("sequelize");

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

                let i = 0
                while (basket_device[i] != undefined) {
                    finalDevice[i][0].dataValues.Count = basket_device[i].Count
                    finalDevice[i][0].dataValues.idForDelete = basket_device[i].id
                    finalDevice[i][0].dataValues.finalPrice = basket_device[i].Count * finalDevice[i][0].price
                    i++
                }
                i = 0
                for (const device of finalDevice) {
                    let clothNameItem = {}
                    if(finalDevice.length !== 0){
                        clothNameItem = await Device.findOne(
                            {
                                where: {id:device[0].dataValues.deviceId},
                            },
                        )
                        finalDevice[i][0].dataValues.clothName = clothNameItem.dataValues.name
                    }
                    i++
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
    async deleteAllUserDevices(req,res){
        let {id_forCookie} = req.query;
        const basketzxc = await Basket.findOne(
            {
                where: {id_forCookie:id_forCookie},
            },
        )
        console.log(basketzxc)
        const basket_device = await BasketDevice.destroy({
            where:{basketId:basketzxc.id}
        })
        return res.json(basket_device)
    }
    async addItemsToOrders(req,res){
        console.log(req.body)
        let {id_forCookie, name, tel} = req.body;
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

            let i = 0
            while (basket_device[i] != undefined) {
                finalDevice[i][0].dataValues.Count = basket_device[i].Count
                finalDevice[i][0].dataValues.idForDelete = basket_device[i].id
                finalDevice[i][0].dataValues.finalPrice = basket_device[i].Count * finalDevice[i][0].price
                i++
            }
            i = 0
            for (const device of finalDevice) {
                let clothNameItem = {}
                if(finalDevice.length !== 0){
                    clothNameItem = await Device.findOne(
                        {
                            where: {id:device[0].dataValues.deviceId},
                        },
                    )
                    finalDevice[i][0].dataValues.clothName = clothNameItem.dataValues.name
                }
                i++
            }
            let itemsNames = []
            finalDevice.forEach(device=>{
                console.log(device)
                itemsNames.push(device[0].dataValues.name + ' ' + device[0].dataValues.clothName)
            })
            const items = itemsNames.join(',')
            const createdOrders = await Orders.create({name, tel, items})
            return res.json(createdOrders)
        }
    }

    async getOrdersList(req,res){
        const order = await Orders.findAll()
        return res.json(order)
    }
    async deleteOneOrder(req, res){
        const {id} = req.query
        const order = await Orders.destroy({
                where: {id: id}
        })
        return res.json(order)
    }
}

module.exports = new basketDeviceController()