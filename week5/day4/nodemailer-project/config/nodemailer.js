const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


exports.sendEmail = (name, email, subject, message) => {
    return transporter.sendMail({
        from: '"My Awesome Project " <hackermanesundios@project.com>',
        to: email, //puede ser más de uno pero necesitamos ponerlos dentro de un array
        subject: subject,
        text: message,
        html: `
        <h2>Hola buenos días ${name}</h2>
        <h1>${email}</h1>
        
        <b>${message}</b>`
    })
}