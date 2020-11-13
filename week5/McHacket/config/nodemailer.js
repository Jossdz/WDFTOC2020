const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

exports.emailRegistro = (email, name) => {
    return transporter.sendMail({
        from: 'jemc0810@gmail.com',
        to: email,
        subject: 'Bienvenido a nuestra app',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style>
          .title{
            color: red;
            font-weight: bold
          }
          
          </style>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Document</title>
        </head>
        <body>
        <h1 class="title">Hola ${name} bienvenido a McHacket</h1>
        </body>
        </html>
    `
    })
}

exports.emailReseña = (name, email, restaurantName) => {
    return transporter.sendMail({
        from: 'Hackerman',
        to: email,
        subject: 'reseña',
        html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
        .title{
          color: red;
          font-weight: bold
        }
        
        </style>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
      </head>
      <body>
      <h1 class="title">Hola ${name} tu restaurante ${restaurantName} recibió una nueva reseña</h1>
      </body>
      </html>
  `
    })
}