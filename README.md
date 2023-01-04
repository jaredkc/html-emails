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

## HTML Email Template

A [simple starter template for HTML emails](https://github.com/leemunroe/responsive-html-email-template) from leemunroe.
