require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('../back/models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const app = express()
const errorHandler = require('./middleware/ErrorHandleMiddleware')
const ApiError=require('./error/ApiError');

app.use(cors())
app.use(express.json())
app.use('/api', router)


//
app.use(function(err,req,res,next){
    if(err instanceof ApiError){
       return res.status(err.status).json({message:err.message})
    }
    return res.status(500).json({message:'Непредвиденная ошибка!'})
})

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}


start()
