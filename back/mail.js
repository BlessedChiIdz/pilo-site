const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 587,
    secure: false,
    auth: {
        user: 'rik232004@mail.ru',
        pass: 'R75wPkd3uzeXb3Jf73pL'
    }
});

const mailer = message =>{
    transporter.sendMail(message,(err,info)=>{
        if(err) return console.log(err)
        console.log("Email sent",info)
    })
}
module.exports = mailer