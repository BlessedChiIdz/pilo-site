const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User =sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue:"USER"},
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.BIGINT, primaryKey:true, autoIncrement:true},
    id_forCookie: {type: DataTypes.INTEGER,allowNull: false},
})
const BasketDevice = sequelize.define('basket_device',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    Count:{type: DataTypes.INTEGER,allowNull:false}
})

const Device = sequelize.define('devices',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    price: {type: DataTypes.INTEGER,allowNull: false},
    img: {type: DataTypes.STRING,allowNull:false},
})
const deviceList = sequelize.define('deviceList',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    price: {type: DataTypes.INTEGER,allowNull: false},
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING,unique: true,allowNull:false},
})
const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})
Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

deviceList.hasMany(BasketDevice)
BasketDevice.belongsTo(deviceList)

Device.hasMany(deviceList)
deviceList.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device)

module.exports = {
    User,Basket,BasketDevice,Device,Type,deviceList,DeviceInfo
}