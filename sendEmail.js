const nodemailer = require('nodemailer');

const sendEmail = (to, subject, body) => {
  if (!to) throw new Error('provide recipients email address');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: to,
    subject: subject ?? 'Nodemailer Project',
    // text: body ?? 'Hi from your nodemailer project',
    html: body ?? `<h1>Hi from your nodemailer project</h1>`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log('Error ' + err);
    } else {
      console.log('Email sent successfully', info);
    }
  });
};

module.exports = sendEmail;
