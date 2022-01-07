# humayonzafar.com
> A Progressive Web App (PWA) built with Next.js and Chakra UI. This is my portfolio site to showcase my skills, share my experience and also details about me.
>
> Live demo [_here_](https://www.humayonzafar.com/).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Acknowledgements](#setup)
* [Contact](#contact)

## General Information
This is my portfolio website to showcase my skills, share my experience and show what I'm currently working on. This is a Progressive Web App ([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) which is built with Next.js and Chakra UI. There is dark and light mode available as well. It is integrated with google analytics.

## Technologies Used
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Cloudinary](https://cloudinary.com/)
- [Google Analytics](https://analytics.google.com/analytics/web/)

## Features
- Progressive Web App can installed on mobile as an app
- Seo Friendly as built with Next.js
- Uses Chakra UI for its interface
- Dark Mode 
- Cross browser compatible
- Mobile Friendly
- 90+ score on [google page insights](https://res.cloudinary.com/humayoncloud/image/upload/v1641593155/Portfolio/gpi_pmyrgt.png) and [gtmetrix](https://res.cloudinary.com/humayoncloud/image/upload/v1641593156/Portfolio/gtmertix_ups4yg.png)

## Screenshots
![Home Page](https://res.cloudinary.com/humayoncloud/image/upload/v1641409691/Portfolio/humayonzafar_gz3wix.png)

![Resume](https://res.cloudinary.com/humayoncloud/image/upload/v1641593584/Portfolio/resume_tgeocy.png)

![Contact](https://res.cloudinary.com/humayoncloud/image/upload/v1641593583/Portfolio/contact_nvbeeg.png)

## Setup
Clone the project using:

### `git clone https://github.com/humayonzafar/portfolio.git`

Install the dependencies using:

### `npm install`

Next to setup the env file from env.example. Seth **NEXT_PUBLIC_HOST** to the web app address.

Get an **API key** from [Sendgrid](https://sendgrid.com/) and set the keys in env as **SENDGRID_API_KEY**. To allow users to contact via contact form.

Also set **PRIMARY_EMAIL** primary key to which emails will be sent and **SUPPORT_EMAIL** from which emails will be sent.

To set [google analytics](https://analytics.google.com/analytics/web/) create tracking id of site and set it in **NEXT_PUBLIC_GOOGLE_ANALYTICS**.

And voila, you are all set.

## Acknowledgements
- This project was inspired by [michael-hall](https://github.com/mah51/).

## Contact
Created by [@humayonzafar](https://www.humayonzafar.com/) - feel free to contact me!

## License

[MIT](LICENSE)