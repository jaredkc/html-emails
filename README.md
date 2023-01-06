# HTML Emails

Working on HTML emails is fun 🙄. Especially that part where you need to inline all the styles so your email will display correctly in email clients. This is a simple setup to make that process a little easier.

1. Clone this repo and run `npm install`
2. `npm run dev` to develop your HTML/CSS
3. `npm run build` to build the HTML with inlined CSS into the `dist` directory

## Overview

- `src`

  Add HTML files for your emails here.

- `src/style.css`

  Write all your CSS here.

- `src/partials`

  Includes for your emails thanks to [Handlebars](https://handlebarsjs.com/), like bulletproof HTML buttons. So much markup for a button 😒.

- `build-emails.js`

  Looks for HTML files in the root of the `src` directory and inline your CSS properties into the style attribute using [Juice](https://github.com/Automattic/juice).

## Sending Test Emails

You can test your emails by sending them with the SendGrid API. When you sign up for a free SendGrid account, you'll be able to send 100 emails per day.

Be sure to perform the following prerequisites to complete this tutorial. This only takes a few minutes. For a more detailed explanation visit [Email API Quickstart for Node.js](https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs)

1. Sign up for a SendGrid account.
2. Enable Two-factor authentication.
3. Create and store a SendGrid API Key with Mail Send > Full Access permissions.
4. Complete Domain Authentication.

Create and .env file that contains: `SENDGRID_API_KEY`, `SEND_EMAIL_TO`, and `SEND_EMAIL_TO`. See `.env.example` for reference.

You can run the nodes script from the command line with the path to the HTML file you want to send.

```node
node send-email.js ./dist/index.html
```

## HTML Email Template

Thanks to leemunroe for the [simple starter template for HTML emails](https://github.com/leemunroe/responsive-html-email-template).
