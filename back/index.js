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


app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname , 'static')))
app.use(cookieParser())
app.use('/api', router)

    app.use(function (req, res, next) {
        if(req.cookies.cookieName == undefined){
                let m = {};
                let a = [];
                const range = 2000000000; // максимальное значение (1..1000000 включительно)
                let count = 1;      // кол-во требуемых чисел
                for (let i = 0; i < count; ++i) {
                    let r = Math.floor(Math.random() * (range - i));
                    a.push(((r in m) ? m[r] : r) + 1);
                    let l = range - i - 1;
                    m[r] = (l in m) ? m[l] : l;
                }
                res.cookie('cookieName', a[0], {maxAge: 1000 * 60 * 60 * 24 * 360, httpOnly: false});
                next();
        }
        else{
            console.log(req.cookies.cookieName)
            console.log("yes cookie")
            next()
        }
    });



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
