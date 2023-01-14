require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('../back/models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const app = express()
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandleMiddleware')
const ApiError=require('./error/ApiError');
const path = require('path')
const cookieParser = require('cookie-parser')
const {Basket} = require("./models/models");
const timeout = require('connect-timeout')
const bodyParser = require("body-parser");
let nodemailer = require('nodemailer');
const mailer = require('./mail')
const req = require("express/lib/request");


app.use(cors({
    credentials: true,
    origin: true
}))

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname , 'static')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router)

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
