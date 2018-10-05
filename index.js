'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.GMAIL_USER, // generated ethereal user
            pass: process.env.GMAIL_PASS// generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: process.env.senderMailID, // sender address
        to: process.env.receiverMailID, // list of receivers
        subject: 'Enter the subject', // Subject line
        text: 'Enter Body of message', // plain text body
        
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});