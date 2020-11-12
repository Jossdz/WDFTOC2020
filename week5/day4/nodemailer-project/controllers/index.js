const { sendEmail } = require('../config/nodemailer')


exports.sendMensajito = async(req, res) => {
    const { name, email, subject, message } = req.body
    await sendEmail(name, email, subject, message)
    res.render('message', { email, subject, message })
}