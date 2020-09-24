const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const config = require("../../configs/index");
const nodemailer = require('nodemailer');
const {
    mongo: { mailsModel },
} = require('../../database/index');

//send EMAIL

router.post("/send-email", (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "turner.jacobs@ethereal.email",
            pass: "MvxhvwXjYkAqnrEwyb",
        },
    });

    const mailOptions = {
        from: "Remitente",
        to: "cb@punchpalm.com",
        subject: "Enviado desde nodemailer",
        text: "Nous vous accompagnons dans vos démarches d'achat et d'importation de votre véhicule depuis l'Europe",
        templates: "mail-1",
    };

    // console.log("Message sent: %s", info.messageId)

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email enviado");
            res.status(200).json(req.body);
        }
    });
});


module.exports = router;