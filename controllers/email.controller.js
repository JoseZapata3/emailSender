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
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    @import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-20 {
        width: 20% !important;
        max-width: 20%;
      }

      .mj-column-per-80 {
        width: 80% !important;
        max-width: 80%;
      }

      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-49 {
        width: 49% !important;
        max-width: 49%;
      }

      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }

      .mj-column-per-25 {
        width: 25% !important;
        max-width: 25%;
      }

      .mj-column-per-75 {
        width: 75% !important;
        max-width: 75%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-20 {
      width: 20% !important;
      max-width: 20%;
    }

    .moz-text-html .mj-column-per-80 {
      width: 80% !important;
      max-width: 80%;
    }

    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

    .moz-text-html .mj-column-per-49 {
      width: 49% !important;
      max-width: 49%;
    }

    .moz-text-html .mj-column-per-50 {
      width: 50% !important;
      max-width: 50%;
    }

    .moz-text-html .mj-column-per-25 {
      width: 25% !important;
      max-width: 25%;
    }

    .moz-text-html .mj-column-per-75 {
      width: 75% !important;
      max-width: 75%;
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
</head>

<body style="word-spacing:normal;">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Effective Software Engineering. </div>
  <div style="">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0, 0.45" position="0, 0.45" src="https://s3-alpha-sig.figma.com/img/b5d9/02ad/d6ec6086efb2f1973fa4bbbf2cb8dfb0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0yJszy3~qA3wroLk~-8ig60pILN3q2ccbdcgQj4uurz4UjaLZJwBcIyS-ONXYck6JEnRiLf824YBB4fo1NEhT5JtoQnuTMWKgolAxQBq-vLWPhY4dCqFHzA3qvEm-~DNKjWd6mIu4QZYsstNhdV09FmpE3kEX9ZxfWaCXGPrjnJifj8Ccf4Or~FmAWL1Esb6l4DZPaTPHY1NFv0jgXC6M1xCWmfKe-FWC-eHcZEmDOBt4eZatkTvCcNXWMPjaZXzxK~2WcPcz31e6S499nOMoBmAqlbKMOPMEFwIBc~uhEfpB~LitJzQdIznB85SoNzyA2VLpVI-6BnjfF-YSiI7w__" type="frame" size="1,1" aspect="atleast" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
    <div style="background:url(https://s3-alpha-sig.figma.com/img/b5d9/02ad/d6ec6086efb2f1973fa4bbbf2cb8dfb0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0yJszy3~qA3wroLk~-8ig60pILN3q2ccbdcgQj4uurz4UjaLZJwBcIyS-ONXYck6JEnRiLf824YBB4fo1NEhT5JtoQnuTMWKgolAxQBq-vLWPhY4dCqFHzA3qvEm-~DNKjWd6mIu4QZYsstNhdV09FmpE3kEX9ZxfWaCXGPrjnJifj8Ccf4Or~FmAWL1Esb6l4DZPaTPHY1NFv0jgXC6M1xCWmfKe-FWC-eHcZEmDOBt4eZatkTvCcNXWMPjaZXzxK~2WcPcz31e6S499nOMoBmAqlbKMOPMEFwIBc~uhEfpB~LitJzQdIznB85SoNzyA2VLpVI-6BnjfF-YSiI7w__) 50% 95% / cover no-repeat;background-position:50% 95%;background-repeat:no-repeat;background-size:cover;margin:0px auto;max-width:600px;">
      <div style="line-height:0;font-size:0;">
        <table align="center" background="https://s3-alpha-sig.figma.com/img/b5d9/02ad/d6ec6086efb2f1973fa4bbbf2cb8dfb0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0yJszy3~qA3wroLk~-8ig60pILN3q2ccbdcgQj4uurz4UjaLZJwBcIyS-ONXYck6JEnRiLf824YBB4fo1NEhT5JtoQnuTMWKgolAxQBq-vLWPhY4dCqFHzA3qvEm-~DNKjWd6mIu4QZYsstNhdV09FmpE3kEX9ZxfWaCXGPrjnJifj8Ccf4Or~FmAWL1Esb6l4DZPaTPHY1NFv0jgXC6M1xCWmfKe-FWC-eHcZEmDOBt4eZatkTvCcNXWMPjaZXzxK~2WcPcz31e6S499nOMoBmAqlbKMOPMEFwIBc~uhEfpB~LitJzQdIznB85SoNzyA2VLpVI-6BnjfF-YSiI7w__" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://s3-alpha-sig.figma.com/img/b5d9/02ad/d6ec6086efb2f1973fa4bbbf2cb8dfb0?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0yJszy3~qA3wroLk~-8ig60pILN3q2ccbdcgQj4uurz4UjaLZJwBcIyS-ONXYck6JEnRiLf824YBB4fo1NEhT5JtoQnuTMWKgolAxQBq-vLWPhY4dCqFHzA3qvEm-~DNKjWd6mIu4QZYsstNhdV09FmpE3kEX9ZxfWaCXGPrjnJifj8Ccf4Or~FmAWL1Esb6l4DZPaTPHY1NFv0jgXC6M1xCWmfKe-FWC-eHcZEmDOBt4eZatkTvCcNXWMPjaZXzxK~2WcPcz31e6S499nOMoBmAqlbKMOPMEFwIBc~uhEfpB~LitJzQdIznB85SoNzyA2VLpVI-6BnjfF-YSiI7w__) 50% 95% / cover no-repeat;background-position:50% 95%;background-repeat:no-repeat;background-size:cover;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:71.5px 16px 71.5px 16px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:113.6px;" ><![endif]-->
                <div class="mj-column-per-20 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                  <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:600;line-height:17.76px;text-align:left;color:#ffffff;">kommit</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td><td class="" style="vertical-align:middle;width:454.4px;" ><![endif]-->
                <div class="mj-column-per-80 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                    <tbody>
                      <tr>
                        <td align="right" style="font-size:0px;padding:0;word-break:break-word;">
                          <div style="font-family:Manrope, serif;font-size:13px;font-weight:600;line-height:17.76px;text-align:right;color:#ffffff;">Effective Software Engineering.</div>
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
    </div>
    <!--[if mso | IE]></v:textbox></v:rect></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#EEEEEE" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:32px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:262.64px;" ><![endif]-->
              <div class="mj-column-per-49 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:60px;font-weight:400;line-height:81.96px;text-align:left;color:#000000;">Hi there!</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:262.64px;" ><![endif]-->
              <div class="mj-column-per-49 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Manrope, serif;font-size:14px;line-height:22.4px;text-align:left;color:#383838;">I hope you are doing well. I’m [Your Name] from the kommit team, where we’ve been supporting companies like [Recipient's Company] for over 15 years.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:16px 0;word-break:break-word;">
                        <div style="font-family:Manrope, serif;font-size:14px;line-height:22.4px;text-align:left;color:#383838;">I've been following the trajectory of [Recipient's Company] for a while now and noticed that you're hiring IT staff; I believe we have a great opportunity to support your efforts. Based on your current needs, I’m confident we can help you</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                          <ul style="padding-left: 20px; margin: 0;">
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
                      <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                          <tr>
                            <td align="center" bgcolor="#1313B6" role="presentation" style="border:none;border-radius:60px;cursor:auto;mso-padding-alt:10px 25px;background:#1313B6;" valign="middle">
                              <p style="display:inline-block;background:#1313B6;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:60px;">
                                <a style=" color: #FFFFFF; text-decoration: none; font-family:'Manrope, serif'; font-size: 16px; font-weight: 500; line-height: 21.86px; padding: 12px 22px" href="https://www.google.com"> Let’s chat! </a>
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
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:center;color:#000000;">arrow</div>
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:600px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0, 0.25" position="0, 0.25" src="https://images-ext-1.discordapp.net/external/hHghVRT90p7MKr3_FoeFyYMQpyIfGbIAbU2BAs1C7aw/%3FExpires%3D1739145600%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4%26Signature%3DJVWgFXTKxqqQ4f0IzbDWqyIMzJ1uBaY0hARrgEi6ReJ3sSI9uPFhSyOkjVGJODZSh5il-LsZwqtcnwuGiIPZQLjHfDfYIKpR2HW3ZPfBKSvnJ0hYCuvB0zLu1KyUndNqopjFhgOLsrh0Fm~CFMqwwwUEdEfzVLlYCv4SVqWKNCZrHnHAMFMvjX2lY4sq2FBq5WOr3SgW6-WN54PgHfVZSpi2P~dpXVaHEK-gqVqR2qskbQ-muwyELDs81JvRdS8Q7DGAOOGU~vRltJM3cN1EERHHQYYwtA3X2ZJ8Ntgs5LJURrOYfhaPC3-T4xWcHQpIYMpYK7Q3oegxV1w29lDXyg__/https/s3-alpha-sig.figma.com/img/c80d/e764/93245f82675051463bf0a84ca445383a?format=webp&width=1613&height=910" type="frame" size="95%" aspect="atmost" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
    <div style="background:url(https://images-ext-1.discordapp.net/external/hHghVRT90p7MKr3_FoeFyYMQpyIfGbIAbU2BAs1C7aw/%3FExpires%3D1739145600%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4%26Signature%3DJVWgFXTKxqqQ4f0IzbDWqyIMzJ1uBaY0hARrgEi6ReJ3sSI9uPFhSyOkjVGJODZSh5il-LsZwqtcnwuGiIPZQLjHfDfYIKpR2HW3ZPfBKSvnJ0hYCuvB0zLu1KyUndNqopjFhgOLsrh0Fm~CFMqwwwUEdEfzVLlYCv4SVqWKNCZrHnHAMFMvjX2lY4sq2FBq5WOr3SgW6-WN54PgHfVZSpi2P~dpXVaHEK-gqVqR2qskbQ-muwyELDs81JvRdS8Q7DGAOOGU~vRltJM3cN1EERHHQYYwtA3X2ZJ8Ntgs5LJURrOYfhaPC3-T4xWcHQpIYMpYK7Q3oegxV1w29lDXyg__/https/s3-alpha-sig.figma.com/img/c80d/e764/93245f82675051463bf0a84ca445383a?format=webp&width=1613&height=910) 50% 75% / 95% no-repeat;background-position:50% 75%;background-repeat:no-repeat;background-size:95%;margin:0px auto;max-width:600px;">
      <div style="line-height:0;font-size:0;">
        <table align="center" background="https://images-ext-1.discordapp.net/external/hHghVRT90p7MKr3_FoeFyYMQpyIfGbIAbU2BAs1C7aw/%3FExpires%3D1739145600%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4%26Signature%3DJVWgFXTKxqqQ4f0IzbDWqyIMzJ1uBaY0hARrgEi6ReJ3sSI9uPFhSyOkjVGJODZSh5il-LsZwqtcnwuGiIPZQLjHfDfYIKpR2HW3ZPfBKSvnJ0hYCuvB0zLu1KyUndNqopjFhgOLsrh0Fm~CFMqwwwUEdEfzVLlYCv4SVqWKNCZrHnHAMFMvjX2lY4sq2FBq5WOr3SgW6-WN54PgHfVZSpi2P~dpXVaHEK-gqVqR2qskbQ-muwyELDs81JvRdS8Q7DGAOOGU~vRltJM3cN1EERHHQYYwtA3X2ZJ8Ntgs5LJURrOYfhaPC3-T4xWcHQpIYMpYK7Q3oegxV1w29lDXyg__/https/s3-alpha-sig.figma.com/img/c80d/e764/93245f82675051463bf0a84ca445383a?format=webp&width=1613&height=910" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://images-ext-1.discordapp.net/external/hHghVRT90p7MKr3_FoeFyYMQpyIfGbIAbU2BAs1C7aw/%3FExpires%3D1739145600%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4%26Signature%3DJVWgFXTKxqqQ4f0IzbDWqyIMzJ1uBaY0hARrgEi6ReJ3sSI9uPFhSyOkjVGJODZSh5il-LsZwqtcnwuGiIPZQLjHfDfYIKpR2HW3ZPfBKSvnJ0hYCuvB0zLu1KyUndNqopjFhgOLsrh0Fm~CFMqwwwUEdEfzVLlYCv4SVqWKNCZrHnHAMFMvjX2lY4sq2FBq5WOr3SgW6-WN54PgHfVZSpi2P~dpXVaHEK-gqVqR2qskbQ-muwyELDs81JvRdS8Q7DGAOOGU~vRltJM3cN1EERHHQYYwtA3X2ZJ8Ntgs5LJURrOYfhaPC3-T4xWcHQpIYMpYK7Q3oegxV1w29lDXyg__/https/s3-alpha-sig.figma.com/img/c80d/e764/93245f82675051463bf0a84ca445383a?format=webp&width=1613&height=910) 50% 75% / 95% no-repeat;background-position:50% 75%;background-repeat:no-repeat;background-size:95%;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:76.5px 32px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:536px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                  <div style="font-family:Manrope, Serif;font-size:37px;font-weight:400;line-height:39px;text-align:left;color:#FFFFFF;">Effective <br> Software Engineering</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:8px 0;word-break:break-word;">
                                  <div style="font-family:Manrope, Serif;font-size:15.92px;font-weight:400;line-height:21.74px;text-align:left;color:#FFFFFF;">Get your engineering on track in 15 days</div>
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
    </div>
    <!--[if mso | IE]></v:textbox></v:rect></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:59px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 20px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:46px;font-weight:400;line-height:52px;text-align:left;color:#1313C3;"><span style="color: #6B6B6B; font-size: 96px; line-height: 131.14px;">01.</span> Laying the Groundwork: <span style="font-size: 23.3px; line-height: 31.85px; padding: 0px; margin 0px;">Preparing for IT Projects.<span>
                              <hr style="margin: 5px 0; color: #D0D0D0">
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 20px;word-break:break-word;">
                        <div style="font-family:Inter, Serif;font-size:14px;font-weight:400;line-height:16.94px;text-align:left;color:#6B6B6B;">Don’t rush to deploy technology, invest in your company growth.</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 20px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:14px;font-weight:700;line-height:19.12px;text-align:left;color:#1313B6;"><a href="https://www.kommit.co/blog/preparing-for-it-projects" target="_blank">Learn more</a></div>
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
                              <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:273px;">
                                        <img alt="team at work" height="380" src="https://s3-alpha-sig.figma.com/img/a6c6/a763/216875e19035f73f84d2289b9356390c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hiAqJK44UCfzK0acPH6WasyxZ4sHCAZ27n4PPvecH8uFGjrAYlRl~wPuG7Z29bj5-kVd7q0XysJpNHnICGaNUfY~sq69NG82QGbqJNd~4-yssCx4FiOMNyy1tkyJ~ShpvlspNHSqkJff2N-5bvM2j2o3BWD~X-DmX0DsMLqoAZRU3XRiYCAjc1zSBX3NizlaTKUiTAeUw0bAX08tJL26kIRQIH1Ywj6Pe3-Iiej5RPsZbR503xVXnb3ODXLddjvGfD~r2~xC1JLF~uR~5lXP0-NeVZ5mc55Fr0lxSZ~4XOGkm-rZIMErPQoyLIKapXrBaD~MomM9UHYfYBMKVjBWKA__" style="border:0;display:block;outline:none;text-decoration:none;height:380px;width:100%;font-size:13px;" width="273" />
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
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                          <hr>
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
            <td style="direction:ltr;font-size:0px;padding:59px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:276px;">
                                        <img alt="kommit os diagram" height="367" src="https://s3-alpha-sig.figma.com/img/e20f/d052/e45be3488b8d020d584ab45243fc4263?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MlT0yxe01rnALhVDXYe2QLr1DvUVpPE4MvUbcOyoo0v93lZQV8tLdCntU37--uM3X00JLIvNpwtytQtcLcJEVEQrQR~f2lHQw181JbPcBEJ4xS5UBEqH9iDBFeoaXkmCbQBZ3-X-aJw65gEsEZR2~ptCe8FpYvQbdrqwPMJkGNc9FrpG0ORVZdfxFEFoi3RMsWFoisbnFXg~Ycj1zQAxtY8VuY6QE1gzB7ojg0hcs1iyUVkSfguQQbufDfMjBqUrRfmvnpZE4Tv-y6Ycnl9hH0nbJotJauXH63kmtOQzFxd5xgE7Qx7qD4aVma25GOSiiwlSN-eEBypgPcRObAUNwA__" style="border:0;display:block;outline:none;text-decoration:none;height:367px;width:100%;font-size:13px;" width="276" />
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
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 20px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:46px;font-weight:400;line-height:52px;text-align:left;color:#1313C3;"><span style="color: #6B6B6B; font-size: 96px; line-height: 131.14px;">02.</span> Operational Excellence
                          <hr style="margin: 5px 0; color: #D0D0D0">
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0 20px;word-break:break-word;">
                        <div style="font-family:Inter, Serif;font-size:14px;font-weight:400;line-height:16.94px;text-align:left;color:#6B6B6B;">Explore in depth how our operations remain well-organized, efficient, and scalable</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 20px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:14px;font-weight:700;line-height:19.12px;text-align:left;color:#000000;"><a href="https://www.kommit.co/blog/introducing-kommit-os" target="_blank" style="color: #1313B6">Learn more</a></div>
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#1313C3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#1313C3;background-color:#1313C3;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1313C3;background-color:#1313C3;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:47px 32px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:134px;" ><![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:12px 5px 0 0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Manrope, Serif;font-size:18.25px;font-weight:800;line-height:25.02px;text-align:left;color:#FFFFFF;">Likedin Logo</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:402px;" ><![endif]-->
              <div class="mj-column-per-75 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:18.25px;font-weight:800;line-height:25.02px;text-align:left;color:#FFFFFF;">@kommit</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:18.25px;font-weight:400;line-height:25.02px;text-align:left;color:#FFFFFF;">Effective Software Engineering</div>
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#1313C3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#1313C3;background-color:#1313C3;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1313C3;background-color:#1313C3;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:16px 32px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:536px;" ><![endif]-->
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
                                  <hr style="color: #FFFFFF; margin: 0; padding: 0;">
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#1313C3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#1313C3;background-color:#1313C3;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1313C3;background-color:#1313C3;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:150px;" ><![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:17px;font-weight:400px;line-height:23.22px;text-align:left;color:#F4F2E9;"><span style="font-family: 'Manrope', serif; color: #F4F2E9; font-size: 30px; line-height:40.98px font-weight: 400">+3</span>
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
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:17px;font-weight:400px;line-height:23.22px;text-align:left;color:#F4F2E9;"><span style="font-family: 'Manrope', serif; color: #F4F2E9; font-size: 30px; line-height:40.98px font-weight: 400">+230</span>
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
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:17px;font-weight:400px;line-height:23.22px;text-align:left;color:#F4F2E9;"><span style="font-family: 'Manrope', serif; color: #F4F2E9; font-size: 30px; line-height:40.98px font-weight: 400">+50</span>
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
                      <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Manrope, Serif;font-size:17px;font-weight:400px;line-height:23.22px;text-align:left;color:#F4F2E9;"><span style="font-family: 'Manrope', serif; color: #F4F2E9; font-size: 30px; line-height:40.98px font-weight: 400">98.9%</span>
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#1313C3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#1313C3;background-color:#1313C3;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1313C3;background-color:#1313C3;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:16px 32px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:536px;" ><![endif]-->
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
                                  <hr style="color: #FFFFFF; margin: 0; padding: 0;">
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
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#1313C3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#1313C3;background-color:#1313C3;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1313C3;background-color:#1313C3;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:58px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:242px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:15px 0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#FFFFFF;">Kommit</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:242px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="right" style="font-size:0px;padding:0;word-break:break-word;">
                                <div style="font-family:Manrope, Serif;font-size:16px;font-weight:700;line-height:21.86px;text-align:right;color:#FFFFFF;">16 years providing <br> Effective Software Engineering.</div>
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

</html>
` 
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