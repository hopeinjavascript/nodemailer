// https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/

require('dotenv').config({ debug: true });
const express = require('express');
const sendEmail = require('./sendEmail');
const app = express();
const PORT = process.env.PORT || 3000;

try {
  sendEmail('hopeinjavascript@gmail.com');
} catch (error) {
  console.error(error.message);
}

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
