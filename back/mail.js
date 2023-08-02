const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'rik232004@mail.ru',
        pass: 'wA99Pn9RxCUNWDwYVEPa'
    }
});

const mailer = message =>{
    transporter.sendMail(message,(err,info)=>{
        if(err) return console.log(err)
        console.log("Email sent",info)
    })
}
module.exports = mailer