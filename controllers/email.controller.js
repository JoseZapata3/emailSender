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
        html: `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>
  </title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    @import url(https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }

      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-25 {
        width: 25% !important;
        max-width: 25%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-50 {
      width: 50% !important;
      max-width: 50%;
    }

    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

    .moz-text-html .mj-column-per-25 {
      width: 25% !important;
      max-width: 25%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
  <style type="text/css">
    .header {
      background-image: url('https://s3-alpha-sig.figma.com/img/b5d9/02ad/d6ec6086efb2f1973fa4bbbf2cb8dfb0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0yJszy3~qA3wroLk~-8ig60pILN3q2ccbdcgQj4uurz4UjaLZJwBcIyS-ONXYck6JEnRiLf824YBB4fo1NEhT5JtoQnuTMWKgolAxQBq-vLWPhY4dCqFHzA3qvEm-~DNKjWd6mIu4QZYsstNhdV09FmpE3kEX9ZxfWaCXGPrjnJifj8Ccf4Or~FmAWL1Esb6l4DZPaTPHY1NFv0jgXC6M1xCWmfKe-FWC-eHcZEmDOBt4eZatkTvCcNXWMPjaZXzxK~2WcPcz31e6S499nOMoBmAqlbKMOPMEFwIBc~uhEfpB~LitJzQdIznB85SoNzyA2VLpVI-6BnjfF-YSiI7w__');
      background-size: cover !important;
      background-position: 50% 95% !important;
      background-repeat: no-repeat !important;
    }

    .main-header-text div {
      font-weight: 600 !important;
    }

    .header-text div {
      font-family: 'Manrope', serif !important;
      color: #FFFFFF !important;
    }

    .icon-header-container {
      width: 50% !important;
    }

    .text-header-container {
      width: 50% !important;
    }

    .introduction-greeting div,
    .introducton-text div,
    .posts-header-title div,
    .posts-header-subtitle,
    .post-title div {
      font-family: 'Manrope', serif !important;
      font-weight: 400 !important;
    }

    .introduction-greeting div {
      color: #1C1C1C !important;
    }

    .introduction-text div {
      color: #383838 !important;
    }

    ul {
      padding-left: 20px !important;
      margin: 0 !important;
    }

    .lets-chat a {
      font-family: 'Manrope', serif !important;
      font-weight: 500 !important;
      color: #FFFFFF !important;
    }

    .posts-header {
      background-image: url('https://images-ext-1.discordapp.net/external/hHghVRT90p7MKr3_FoeFyYMQpyIfGbIAbU2BAs1C7aw/%3FExpires%3D1739145600%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4%26Signature%3DJVWgFXTKxqqQ4f0IzbDWqyIMzJ1uBaY0hARrgEi6ReJ3sSI9uPFhSyOkjVGJODZSh5il-LsZwqtcnwuGiIPZQLjHfDfYIKpR2HW3ZPfBKSvnJ0hYCuvB0zLu1KyUndNqopjFhgOLsrh0Fm~CFMqwwwUEdEfzVLlYCv4SVqWKNCZrHnHAMFMvjX2lY4sq2FBq5WOr3SgW6-WN54PgHfVZSpi2P~dpXVaHEK-gqVqR2qskbQ-muwyELDs81JvRdS8Q7DGAOOGU~vRltJM3cN1EERHHQYYwtA3X2ZJ8Ntgs5LJURrOYfhaPC3-T4xWcHQpIYMpYK7Q3oegxV1w29lDXyg__/https/s3-alpha-sig.figma.com/img/c80d/e764/93245f82675051463bf0a84ca445383a?format=webp&width=1613&height=910') !important;
      background-size: cover !important;
      background-position: 50% 60% !important;
      background-repeat: no-repeat !important;
    }

    .posts-header-title div {
      color: #FFFFFF !important;
    }

    .post-number {
      color: #6B6B6B !important;
    }

    .post-title div {
      color: #1313C3 !important;
    }

    .post-subtitle {
      margin: 0 !important;
      padding: 0 !important;
    }

    .post-separator {
      margin: 5px 0 !important;
      color: #D0D0D0 !important;
    }

    .post-description div {
      color: #6B6B6B !important;
      font-family: "Inter", Serif !important;
      font-weight: 400 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .Learn-more {
      padding-top: 8px !important;
    }

    .Learn-more a {
      color: #1313B6 !important;
      font-family: 'Manrope', serif !important;
      font-weight: 700 !important;
    }

    .newsletter-footer {
      background-color: #1313C3 !important;
    }

    .social-media-info div {
      color: #FFFFFF !important;
      font-family: 'Manrope', serif !important;
    }

    .company-results div {
      font-family: 'Manrope', serif !important;
      color: #F4F2E9 !important;
      font-weight: 400 !important;
    }

    .footer-text div {
      font-family: 'Manrope', serif !important;
      color: #FFFFFF !important;
      font-weight: 700 !important;
    }

    .footer-icon-container {
      width: 50% !important;
    }

    .footer-text-container {
      width: 50% !important;
    }

    .header {
      width: 100% !important;
      max-width: 600px !important;
      height: 143px !important;
    }

    .kommit-header-icon img {
      width: auto !important;
      max-width: 95px !important;
      height: 22.85px !important;
      margin: 43px 16px 38px 16px !important;
    }

    .main-header-text div {
      font-size: 13px !important;
      line-height: 17.76px !important;
      margin: 43px 16px 38px 16px !important;
    }

    .introduction-greeting div {
      width: 260px !important;
      font-size: 60px !important;
      line-height: 81.96px !important;
      margin: 32px 16px 0 32px
    }

    .introducton-text {
      padding: 32px 32px 0 0 !important;
    }

    .introducton-text div {
      width: 260px !important;
      font-size: 14px !important;
      line-height: 22.4px !important;
    }

    .lets-chat a {
      font-size: 16px !important;
      line-height: 21.86px !important;
    }

    .arrow-down img {
      width: 16px !important;
      height: 23px !important;
      margin: auto;
      padding: 0 !important:
    }

    .posts-header {
      width: 568px !important;
      height: 246px !important;
    }

    .posts-header-title div {
      font-size: 37px !important;
      line-height: 39px !important;
      margin: 40.5px 0 0 38px !important;
    }

    .posts-header-subtitle {
      font-size: 15.92px !important;
      line-height: 21.74px !important;
      padding: 18px 0 0 38px !important;
    }

    .post-container {
      width: 578px !important;
    }

    .post-number {
      font-size: 96px !important;
      line-height: 131.14px !important;
    }

    .post-title {
      width: 273px !important;
    }

    .post-title div {
      width: 273px !important;
      font-size: 46px !important;
      line-height: 52px !important;
    }

    .post-subtitle {
      font-size: 23.3px !important;
      line-height: 31.85px !important;
    }

    .post-description div {
      font-size: 14px !important;
      line-height: 16.94px !important;
    }

    .Learn-more a {
      font-size: 14px !important;
      line-height: 19.12px !important;
    }

    .image-1 img {
      height: 380px !important;
      width: 270px !important;
    }

    .image-2 img {
      height: 367px !important;
      width: 276px !important;
    }

    .linkedin-icon-container {
      width: 60px !important;
    }

    .linkedin-icon-container td {
      padding: 0 !important;
    }

    .social-media-info {
      width: 100% !important;
      margin: 45px 190px 5px 5px;
    }

    .linkedin-icon img {
      width: auto !important;
      max-width: 50px !important;
      height: 50px !important;
      margin: 0 !important;
      padding: 0 !important;
      margin: 47px 0 23PX 0 !important;
    }

    .social-media-info div {
      font-size: 18.25px !important;
      line-height: 25.02px !important;
    }

    .company-results-container div {
      max-width: 130px !important;
      margin: 16px 6px !important;
    }

    .company-results div {
      font-size: 17px !important;
      line-height: 23.22px !important;
    }

    .figures {
      font-size: 30px !important;
      line-height: 40.98px !important;
    }

    .kommit-footer-icon img {
      width: 130px !important;
      height: 30px !important;
      margin: 28px 32px 32px 0 !important;
    }

    .footer-text div {
      font-size: 16px !important;
      line-height: 21.86px !important;
      margin: 32px 32px 32px 0 !important;
    }

    .footer-separator {
      color: #E2E2E2 !important;
      margin: 16px 32PX !important;
    }

    @media only screen and (min-width: 430px) and (max-width: 599px) {
      .header {
        width: 100% !important;
        max-width: 599px !important;
        height: 102.48px !important;
      }

      .kommit-header-icon img {
        max-width: 68.08px !important;
        height: 16.48px !important;
        margin: 20.82px 0 27.23px 16px !important;
      }

      .main-header-text div {
        max-width: 160px !important;
        font-size: 9.32px !important;
        line-height: 12.73px !important;
        margin: 20.82px 8px 27.23px 0px !important;
      }

      .introduction-container div {
        width: 100% !important;
        max-width: 186.33px !important;
      }

      .introduction-greeting div {
        width: 186.33px !important;
        font-size: 42px !important;
        line-height: 27.37px !important;
        margin: 22.93px 12px 0 0 !important;
      }

      .introducton-text {
        padding: 8px 22.93px 0 0 !important;
      }

      .introducton-text div {
        width: 186.33px !important;
        font-size: 10px !important;
        line-height: 16px !important;
      }

      .lets-chat a {
        font-size: 12px !important;
        line-height: 16.39px !important;
      }

      .arrow-down img {
        width: 11.47px !important;
        height: 16.48px !important;
        margin: auto;
        padding: 0 !important:
      }

      .posts-header {
        width: 407.07px !important;
        height: 176.3px !important;
      }

      .posts-header-title div {
        font-size: 26.51px !important;
        line-height: 27.95px !important;
        margin: 20.5px 0 0 28px !important;
      }

      .posts-header-subtitle {
        font-size: 12px !important;
        line-height: 16.39px !important;
        padding: 14px 0 0 28px !important;
      }

      .post-container {
        width: 407.07px !important;
      }

      .post-container div {
        max-width: 200px !important;
      }

      .post-number {
        font-size: 68.8px !important;
        line-height: 93.98px !important;
      }

      .post-title div {
        width: 195.65px !important;
        font-size: 32px !important;
        line-height: 37.27px !important;
      }

      .post-subtitle {
        font-size: 16px !important;
        line-height: 21.86px !important;
      }

      .post-description div {
        width: 170.65px !important;
        font-size: 10px !important;
        line-height: 12.1px !important;
      }

      .Learn-more a {
        font-size: 10px !important;
        line-height: 13.66px !important;
      }

      .image-1 img {
        height: 270.33px !important;
        width: 195.65px !important;
      }

      .image-2 img {
        height: 263.2px !important;
        width: 197.8px !important;
      }

      .linkedin-icon-container {
        width: 40px !important;
      }

      .linkedin-icon-container td {
        padding: 0 !important;
      }

      .social-media-info {
        width: 50% !important;
        margin: 33.68px 110px 0px 0px;
      }

      .linkedin-icon img {
        width: auto !important;
        max-width: 35.83px !important;
        height: 35.83px !important;
        margin: 0 !important;
        padding: 0 !important;
        margin: 33.68px 0 22.5px 0 !important;
      }

      .social-media-info div {
        font-size: 14px !important;
        line-height: 17.93px !important;
      }

      .company-results-container div {
        max-width: 93.17px !important;
        margin: 11.47px 4px !important;
      }

      .company-results div {
        font-size: 12px !important;
        line-height: 16.39px !important;
      }

      .figures {
        font-size: 22px !important;
        line-height: 30.05px !important;
      }

      .kommit-footer-icon img {
        width: 93.17px !important;
        height: 21.5px !important;
        margin: 18.93px 22.93px 22.93px 0 !important;
      }

      .footer-text div {
        width: 208px !important;
        font-size: 12px !important;
        line-height: 16.39px !important;
        margin: 22.93px 22.93px 22.93px 0 !important;
      }

      .footer-separator {
        color: #E2E2E2 !important;
        margin: 11.47px 22.93PX !important;
      }
    }

    @media only screen and (max-width: 429px) {
      .header {
        width: 100% !important;
        max-width: 429px !important;
        height: 76.27px !important;
      }

      .kommit-header-icon img {
        width: auto !important;
        max-width: 40.67px !important;
        height: 12.27px !important;
      }

      .main-header-text div {
        width: 100% !important;
        font-size: 6.93px !important;
        line-height: 9.47px !important;
        margin: 22.93px 8.53px 20.27px 8.53px !important:
      }

      .icon-header-container {
        width: 30% !important;
      }

      .text-header-container {
        width: 60% !important;
      }

      .introduction-container div {
        width: 100% !important;
        max-width: 150px !important;
      }

      .introduction-greeting div {
        width: 138.67px !important;
        font-size: 32px !important;
        line-height: 43.71px !important;
        margin: 17.07px 0 0 17.07px !important;
      }

      .introducton-text {
        padding: 17.07px 17.07px 0 0 !important;
      }

      .introducton-text div {
        width: 138.67px !important;
        font-size: 10px !important;
        line-height: 16px !important;
      }

      .lets-chat a {
        font-size: 10px !important;
        line-height: 13.66px !important;
      }

      .arrow-down img {
        width: 8.53px !important;
        height: 12.27px !important;
        margin: auto;
        padding: 0 !important:
      }

      .posts-header {
        width: 302.07px !important;
        height: 131.2px !important;
      }

      .posts-header-title div {
        font-size: 19.73px !important;
        line-height: 20.8px !important;
        margin: 7.5px 0 0 22px !important;
      }

      .posts-header-subtitle {
        font-size: 10px !important;
        line-height: 13.66px !important;
        padding: 10px 0 0 22px !important;
      }

      .post-container {
        width: 302.93px !important;
      }

      .post-container div {
        max-width: 150px !important;
      }

      .post-number {
        font-size: 51.2px !important;
        line-height: 69.94px !important;
      }

      .post-title div {
        width: 145.6px !important;
        font-size: 24px !important;
        line-height: 27.73px !important;
      }

      .post-subtitle {
        font-size: 10px !important;
        line-height: 16.39px !important;
      }

      .post-description div {
        width: 145.6px !important;
        font-size: 10px !important;
        line-height: 12.1px !important;
      }

      .Learn-more a {
        font-size: 10px !important;
        line-height: 13.66px !important;
      }

      .image-1 img {
        height: 202.67px !important;
        width: 145.6px !important;
        margin: 0 4px !important;
      }

      .image-2 img {
        height: 195.73px !important;
        width: 147.2px !important;
      }

      .linkedin-icon-container {
        width: 30px !important;
      }

      .linkedin-icon-container td {
        padding: 0 !important;
      }

      .social-media-info {
        width: 50% !important;
        margin: 25.07px 110px 0px 0px;
      }

      .linkedin-icon img {
        width: auto !important;
        max-width: 26.67px !important;
        height: 26.67px !important;
        margin: 0 !important;
        padding: 0 !important;
        margin: 25.07px 0 12.5px 0px !important;
      }

      .social-media-info div {
        font-size: 10px !important;
        line-height: 13.34px !important;
      }

      .company-results-container div {
        max-width: 69.33px !important;
        margin: 8.23px 8.23px !important;
      }

      .company-results div {
        font-size: 10px !important;
        line-height: 13.66px !important;
      }

      .figures {
        font-size: 16px !important;
        line-height: 21.86px !important;
      }

      .kommit-footer-icon img {
        width: 69.33px !important;
        height: 16px !important;
        margin: 13.07px 17.07px 17.07px 0 !important;
      }

      .footer-text div {
        font-size: 10px !important;
        line-height: 13.66px !important;
        margin: 17.07px 17.07px 17.07px 0 !important;
      }

      .footer-separator {
        color: #E2E2E2 !important;
        margin: 8.53px 17.07PX !important;
      }
    }
  </style>
</head>

<body style="word-spacing:normal;">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Effective Software Engineering. </div>
  <div style="">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="header-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="header" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="icon-header-container-outlook" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix icon-header-container" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" class="kommit-header-icon" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:300px;">
                                        <img height="auto" src="https://kommit.co/icons/kommit.svg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="text-header-container-outlook" style="vertical-align:middle;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix text-header-container" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:middle;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="right" class="header-text main-header-text" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:right;color:#000000;">Effective Software Engineering.</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#EEEEEE" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#EEEEEE;background-color:#EEEEEE;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EEEEEE;background-color:#EEEEEE;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:16px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:568px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Manrope, serif;font-size:12px;line-height:22.4px;text-align:left;color:#383838;"><a style="color: #777777" href="https://www.kommit.co">www.kommit.co</a></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="introduction-container-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="introduction-container" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" class="introduction-greeting" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Hi there!</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" class="introducton-text" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">I hope you are doing well. I’m [Your Name] from the kommit team, where we’ve been supporting companies like [Recipient's Company] for over 15 years.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="introducton-text" style="font-size:0px;padding:16px 0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">I've been following the trajectory of [Recipient's Company] for a while now and noticed that you're hiring IT staff; I believe we have a great opportunity to support your efforts. Based on your current needs, I’m confident we can help you</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="introducton-text" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                          <ul>
                            <li>Overcome engineering challenges</li>
                            <li>Scale IT operations efficiently</li>
                            <li>Drive forward innovation projects</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" vertical-align="middle" class="lets-chat" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                          <tr>
                            <td align="center" bgcolor="#1313B6" role="presentation" style="border:none;border-radius:60px;cursor:auto;mso-padding-alt:10px 25px;background:#1313B6;" valign="middle">
                              <p style="display:inline-block;background:#1313B6;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:60px;">
                                <a href="#"> Let’s chat! </a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" class="arrow-down" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:550px;">
                                <img height="auto" src="https://img.icons8.com/?size=100&id=43830&format=png&color=1313C3" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="550" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="posts-header-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="posts-header" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" class="header-text posts-header-title" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Effective <br> Software Engineering</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" class="header-text posts-header-subtitle" style="font-size:0px;padding:8px 0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Get your engineering on track in 15 days</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="post-container-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="post-container" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" class="post-title" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><span class="post-number">01.</span> <br> Laying the Groundwork: <span class="post-subtitle">Preparing for IT Projects.</span>
                                  <hr class="post-separator">
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" class="post-description" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Don’t rush to deploy technology, invest in your company growth.</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" class="Learn-more" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><a href="https://www.kommit.co/blog/preparing-for-it-projects" target="_blank">Learn more</a></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" class="image-1" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:300px;">
                                        <img alt="team at work" height="auto" src="https://s3-alpha-sig.figma.com/img/a6c6/a763/216875e19035f73f84d2289b9356390c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hiAqJK44UCfzK0acPH6WasyxZ4sHCAZ27n4PPvecH8uFGjrAYlRl~wPuG7Z29bj5-kVd7q0XysJpNHnICGaNUfY~sq69NG82QGbqJNd~4-yssCx4FiOMNyy1tkyJ~ShpvlspNHSqkJff2N-5bvM2j2o3BWD~X-DmX0DsMLqoAZRU3XRiYCAjc1zSBX3NizlaTKUiTAeUw0bAX08tJL26kIRQIH1Ywj6Pe3-Iiej5RPsZbR503xVXnb3ODXLddjvGfD~r2~xC1JLF~uR~5lXP0-NeVZ5mc55Fr0lxSZ~4XOGkm-rZIMErPQoyLIKapXrBaD~MomM9UHYfYBMKVjBWKA__" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="post-container-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="post-container" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                  <hr>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="post-container-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="post-container" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" class="image-2" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:300px;">
                                        <img alt="kommit os diagram" height="auto" src="https://s3-alpha-sig.figma.com/img/e20f/d052/e45be3488b8d020d584ab45243fc4263?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MlT0yxe01rnALhVDXYe2QLr1DvUVpPE4MvUbcOyoo0v93lZQV8tLdCntU37--uM3X00JLIvNpwtytQtcLcJEVEQrQR~f2lHQw181JbPcBEJ4xS5UBEqH9iDBFeoaXkmCbQBZ3-X-aJw65gEsEZR2~ptCe8FpYvQbdrqwPMJkGNc9FrpG0ORVZdfxFEFoi3RMsWFoisbnFXg~Ycj1zQAxtY8VuY6QE1gzB7ojg0hcs1iyUVkSfguQQbufDfMjBqUrRfmvnpZE4Tv-y6Ycnl9hH0nbJotJauXH63kmtOQzFxd5xgE7Qx7qD4aVma25GOSiiwlSN-eEBypgPcRObAUNwA__" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0 0 0 7px;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" class="post-title" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><span class="post-number">02.</span> <br> Operational Excellence
                                  <hr class="post-separator">
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" class="post-description" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Explore in depth how our operations remain well-organized, efficient, and scalable</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" class="Learn-more" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><a href="https://www.kommit.co/blog/introducing-kommit-os" target="_blank" style="color: #1313B6">Learn more</a></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletter-footer-outlook social-media-container-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="newsletter-footer social-media-container" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="linkedin-icon-container-outlook" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix linkedin-icon-container" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" class="linkedin-icon" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:250px;">
                                        <img height="auto" src="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="250" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="social-media-info-outlook" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix social-media-info" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:800;line-height:1;text-align:left;color:#000000;">@kommit</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:400;line-height:1;text-align:left;color:#000000;">Effective Software Engineering</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletter-footer-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="newsletter-footer" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                  <hr class="footer-separator">
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletter-footer-outlook company-results-container-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="newsletter-footer company-results-container" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:150px;" ><![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" class="company-results" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><span class="figures">+3</span>
                          <br> Awarded Grants
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:150px;" ><![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" class="company-results" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><span class="figures">+230</span>
                          <br> Engineers trained in our Bootcamp
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:150px;" ><![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" class="company-results" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><span class="figures">+50</span>
                          <br> Engineers working with our clients
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:150px;" ><![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" class="company-results" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"><span class="figures">98.9%</span>
                          <br> Average engineers' retention rate
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletter-footer-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="newsletter-footer" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                  <hr class="footer-separator">
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletter-footer-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="newsletter-footer" style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="footer-icon-container-outlook" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix footer-icon-container" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" class="kommit-footer-icon" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:250px;">
                                        <img height="auto" src="https://kommit.co/icons/kommit.svg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="250" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="footer-text-container-outlook" style="vertical-align:middle;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix footer-text-container" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:middle;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="right" class="footer-text" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:right;color:#000000;">16 years providing <br> Effective Software Engineering.</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`
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