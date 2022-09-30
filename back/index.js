require('dotenv').config()
const{Basket} = require('./models/models')
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
const cockie_exp = 60 * 60 * 1000 * 24;


app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname , 'static')))
app.use(cookieParser())
app.use('/api', router)


app.use(function (req, res, next) {
    // check if client sent cookie
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        // no: set a new cookie
        var randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
        const basket = Basket.create()
        console.log('cookie created successfully');
    } else {
        // yes, cookie was already present
        console.log('cookie exists', cookie);
    }
    next(); // <-- important!
});

// let static middleware do its job
app.use(express.static(__dirname + '/public'));


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
