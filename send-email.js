/**
 * Run this script from the command line with the
 * path to the HTML file you want to send.
 *
 * `node send-email.js ./dist/index.html`
 */
import sgMail from '@sendgrid/mail';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';

dotenv.config();

const htmlFile = process.argv[2];
let htmlContent = null;

// Get the HTML file contents
try {
  htmlContent = readFileSync(htmlFile, 'utf8');
} catch (err) {
  console.error(err);
}

// Send the email if we have the htmlContent
if (htmlContent) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.SEND_EMAIL_TO, // Change to your recipient
    from: process.env.SEND_EMAIL_FROM, // Change to your verified sender
    subject: 'Testing HTML Email',
    html: htmlContent,
  };
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
}
