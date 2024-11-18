const { response } = require('express');

const sendMail = (req, res = response) => {

    require('dotenv').config()
    const nodemailer = require('nodemailer');
    let emailStatus;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL,
            pass: process.env.MAIL_PASSWD,
        },
    });

    const mailOptions = {
        from: process.env.MAIL,
        to: req.body.to,
        subject: "Recordatorio de cita",
        html: "<h1>Hola</h1> <p>Este es un recordatorio de cita</p>"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            emailStatus=error;
        }
        emailStatus= "Email sent: " + info.response
    });

    res.json({
        status: 200,
        message: 'Email sent successfully',
        emailStatus
    });
}

module.exports = {
    sendMail
}