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
        html: ` <style>
        body{
            margin: 0;
            padding: 0;
        }

        *{
            box-sizing: border-box;
            font-family: "Manrope", serif;
            font-weight: 400;
        }

        html{
            scroll-behavior: smooth;
        }

        h1, h2, h3 {
            all: unset;
        }

        hr{
            border: 1px solid #D0D0D0;
            margin: 8px 0;
            width: 95%;
        }

        ul{
            padding-left: 20px;
        }

        .separator{
            width: 90%;
            margin: 16px 32px;
        }

        header#main {
            background-image: url("../assets/header-coverage.webp");
            width: 100%;
            height: 143px;
        }

        header#sub-header{
            background-image: url("../assets/article-coverage.webp");
            margin: 16px;
            padding: 68px 30px;
            width: 568px;
            height: 246px;
            font-size: 37px;
            line-height: 39px;
        }

        .sub-title{
            font-size: 15.92px;
            line-height: 21.74px;
            padding-top: 12px;
        }

        .coverage{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 100%;
            padding: 0px 20px;
            color: #FFFFFF;
            font-weight: 600;
        }

        #introduction-content{
            color: #383838; 
            font-size: 14px; 
            font-weight: 400; 
            font-family: 'Manrope', serif; 
            line-height: 22.4px; 
            width: 30%; 
            padding-left: 4px;
        }

        #introduction-content ul{
            padding-left: 20px;
        }

        #introduction-greeting{
            width: 30%; 
            padding-right: 4px; 
            padding-top: 15px; 
            text-align: start; 
            vertical-align: top; 
            font-size: 60px; 
            line-height: 57.37px; 
            font-weight: 400; 
            font-family: 'Manrope', serif; 
            color:#1C1C1C;
        }

        #btn-lets-chat{
            display: block;
            margin: 20px auto;
            padding: 12px 22px; 
            background-color: #1313B6;
            color: #FFFFFF;
            border: none;
            border-radius: 60px;
            height: 46px;
            width: 123px;
            font-size: 16px;
            line-height: 21.86px;
            font-weight: 500;
            text-decoration: none;
        }

        #arrow{
            display: block;
            margin: auto;
            height: 23px;
            width: 16px;
        }

        .post{
            padding: 43px 19px;
        }

        .article-info{
            vertical-align: top;
        }

        .article-number{
            font-size: 96px;
            line-height: 131.14px;
            color: #6B6B6B;
        }

        .article-title{
            font-size: 46px;
            line-height: 52px;
            color: #1313C3;
        }

        .article-subtitle{
            font-size: 23.3px;
            line-height: 31.83px;
            color: #1313C3;
            margin-top: 6px;
        }

        .article-text{
            font-family: "Inter", serif;
            font-size: 14px;
            line-height: 16.94px;
            color: #6B6B6B;
            text-align: justify;
            word-spacing: -0.5px;
            padding-right: 15px;
            margin: 4px 0;
        }

        .learn-more{
            font-size: 14px;
            line-height: 19.12px;
            font-weight: 700;
            color: #1313B6;
        }

        .article-image{
            height: 367px;
            width: 276px;
        }

        footer{
            background-color: #1313C3;
            color: #FFFFFF;
        }

        #social-network-information{
            height: 144px;
            font-size: 18.25px;
            line-height: 25.02px;
            padding: 47px 32px;
        }

        #social-network-information span{
            font-weight: 800;
        }

        #company-information{
            font-size: 17px;
            line-height: 23.22px;
            color: #F4F2E9;
            padding: 16px;
        }

        .company-info{
            width: 130px;
            vertical-align: top;
        }

        .company-info span{
            font-size: 30px;
            line-height: 40.98px;
        }

        #footer-information{
            padding: 32px;
        }

        #footer-information p{
            font-size: 16px;
            line-height: 21.86px;
            font-weight: 700;
        }
    </style>
    <header id="main" class="coverage">
        <table style="width: 100%; padding: 57px 0;">
            <tbody>
                <tr >
                    <td style="padding: 0px 16px;">
                        <svg width="95" height="23" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M113.988 7.17181H106.782V14.6465H113.988V7.17181Z" fill="white"/>
                            <path d="M22.4173 8.3839H13.6105L7.20554 15.2526V0H0V28.9899H7.20554V23.0304L7.80601 22.5253L13.9107 28.9899H22.7175L12.8099 18.1818L22.5173 8.3839H22.4173Z" fill="white"/>
                            <path d="M113.988 18.0807H106.782V28.9899H113.988V18.0807Z" fill="white"/>
                            <path d="M38.2294 8.58586C36.5281 7.67677 34.6267 7.17181 32.525 7.17181C30.4234 7.17181 28.522 7.57576 26.8207 8.58586C25.1193 9.49495 23.8183 10.8081 22.8176 12.4243C21.8168 14.0405 21.4165 15.9595 21.4165 18.0807C21.4165 20.2019 21.9169 22.1212 22.8176 23.7374C23.8183 25.4546 25.1193 26.6666 26.8207 27.6767C28.522 28.5858 30.4234 29.091 32.525 29.091C34.6267 29.091 36.5281 28.6868 38.2294 27.6767C39.9307 26.7676 41.2317 25.4546 42.2325 23.7374C43.2333 22.0202 43.6336 20.2019 43.6336 18.0807C43.6336 15.9595 43.1332 14.1415 42.2325 12.4243C41.3318 10.8081 39.9307 9.49495 38.2294 8.58586ZM32.525 22.7273C29.923 22.7273 27.7213 20.606 27.7213 18.0807C27.7213 15.5555 29.923 13.4344 32.525 13.4344C35.127 13.4344 37.3287 15.5555 37.3287 18.0807C37.3287 20.606 35.127 22.7273 32.525 22.7273Z" fill="white"/>
                            <path d="M125.997 21.8183C125.096 21.8183 124.396 21.1111 124.396 20.2021V14.4445H129.8V7.27269H124.396V0H117.19V20.2021C117.19 25.0505 121.193 29.0909 126.097 28.9899H130V21.8183H125.997Z" fill="white"/>
                            <path d="M97.2748 7.17181H91.4703L87.7674 18.4849L84.4649 7.17181H78.5604L76.0584 14.5454L75.8583 14.9496L75.6581 14.1414L75.3579 12.7274V12.5252C75.3579 12.5252 75.3579 12.3233 75.3579 12.2223C75.3579 12.1213 75.3579 12.0203 75.3579 11.9192C75.3579 11.9192 75.3579 11.7172 75.3579 11.6162C74.5573 9.19192 72.2555 7.37379 69.5534 7.37379C66.8514 7.37379 64.6497 9.09081 63.8491 11.5151C63.8491 11.8181 63.749 12.0202 63.6489 12.3232C63.2486 13.9394 62.9484 15.4546 62.9484 15.9597L61.8475 22.4242C61.8475 22.4242 61.8475 22.5252 61.8475 22.6262C61.7474 22.9292 61.4472 23.2323 61.0469 23.2323C60.6466 23.2323 60.7467 23.2322 60.6466 23.1312C60.4464 23.0302 60.2463 22.6262 60.1462 22.1211L58.7451 15.3535C58.7451 14.9495 58.6451 14.6464 58.545 14.3434C58.0446 12.7272 56.9438 11.4142 55.4426 10.7072C54.642 10.3031 53.7413 10.101 52.7405 10.101C49.538 10.101 47.2363 12.4242 46.6358 15.6566C46.5357 15.9596 46.4357 16.3636 46.4357 16.6667L45.635 20.606C45.4349 21.4141 45.635 22.2223 46.1354 22.8284C46.5357 23.5355 47.2363 23.9393 48.0369 24.1413C48.8375 24.3434 49.538 24.1414 50.2386 23.7374C50.839 23.3334 51.3394 22.6264 51.4395 21.8183L52.2401 17.7779C52.2401 17.2728 52.3402 16.9698 52.7405 16.7678C52.8406 16.7678 53.0407 16.6667 53.1408 16.6667C53.4411 16.6667 53.8414 16.8688 53.9414 17.2728C53.9414 17.2728 53.9414 17.2728 53.9414 17.4748L55.0423 23.9394C55.5427 27.0707 58.0446 29.293 61.147 29.293H61.5473C61.5473 29.293 61.7474 29.293 61.8475 29.293C61.8475 29.293 61.9476 29.293 62.0477 29.293C62.0477 29.293 62.1477 29.293 62.2478 29.293C62.2478 29.293 62.448 29.293 62.5481 29.293C62.5481 29.293 62.6481 29.293 62.7482 29.293C62.7482 29.293 62.8483 29.293 62.9484 29.293C62.9484 29.293 63.1485 29.293 63.2486 29.293C63.2486 29.293 63.4487 29.293 63.5488 29.293C63.6489 29.293 63.749 29.2929 63.8491 29.1919C63.9491 29.1919 64.0492 29.192 64.1493 29.091C64.1493 29.091 64.3494 29.0909 64.3494 28.9899C64.3494 28.9899 64.4495 28.99 64.5496 28.889C64.5496 28.889 64.6497 28.889 64.7497 28.889C64.7497 28.889 64.7497 28.889 64.8498 28.889C64.8498 28.889 64.9499 28.8889 65.05 28.7879C65.05 28.7879 65.2501 28.687 65.2501 28.5859C65.2501 28.5859 65.4503 28.485 65.4503 28.384C65.5504 28.384 65.6504 28.1819 65.7505 28.0809C66.4511 27.3738 66.8514 26.5656 67.0515 25.6565C67.4518 23.8383 67.8521 22.1211 67.9522 21.6161L69.0531 15.1515C69.0531 15.1515 69.0531 15.0506 69.0531 14.9496C69.1531 14.6465 69.4534 14.3434 69.8537 14.3434C70.254 14.3434 70.1539 14.3435 70.254 14.4445C70.3541 14.4445 70.4541 14.6464 70.5542 14.8484C70.5542 15.0505 70.6543 15.2526 70.7544 15.4546L73.2563 27.4747C73.5565 28.7879 74.6574 29.7981 75.9584 29.8991H76.5588C76.759 29.8991 76.9591 29.899 77.1593 29.798C78.1601 29.495 78.8606 28.788 79.2609 27.8789C79.4611 27.4749 79.5611 27.1718 79.6612 26.8688C79.9615 26.1617 81.5627 21.9193 82.4634 19.495L85.5658 30H91.07L94.8729 20.202L97.8752 30H104.38L97.9753 8.28278L97.2748 7.17181Z" fill="white"/>
                        </svg>
                    </td>
                    <td style="font-family: 'Manrope', serif; font-size: 13px; line-height: 17.76px; font-weight: 600; color: #FFFFFF; text-align: end; padding: 0px 16px;">
                        Effective Software Engineering.
                    </td>
                </tr>
            </tbody>
        </table>
    </header>
    <main>
        <section style="padding: 32px;">
            <table id="introduction" style="width: 100%;">
                <tbody>
                    <tr>
                        <td rowspan="1" id="introduction-greeting">
                            Hi there!
                        </td>
                        <td rowspan="1" id="introduction-content">
                            <p>
                                I hope you are doing well. I’m [Your Name] from the kommit team, where we’ve been supporting companies like [Recipient's Company] for over 15 years.
                            </p>
                            <P>
                                I've been following the trajectory of [Recipient's Company] for a while now and noticed that you're hiring IT staff; I believe we have a great opportunity to support your efforts. Based on your current needs, I’m confident we can help you
                            </P>
                            <ul>
                                <li>Overcome engineering challenges</li>
                                <li>Scale IT operations efficiently</li>
                                <li>Drive forward innovation projects</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="#" id="btn-lets-chat">
                Let’s chat!
            </a>
            <a id="arrow" href="#sub-header">
                <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.06441 22.9489C7.65217 22.9489 7.29146 22.7445 7.03382 22.4378L0.386473 15.8444C-0.128825 15.3333 -0.128825 14.5156 0.386473 14.0556C0.901771 13.5444 1.72625 13.5444 2.19002 14.0556L6.77617 18.6045L6.77617 1.27778C6.77617 0.562223 7.34299 3.20972e-07 8.06441 3.52507e-07C8.78583 3.84041e-07 9.35266 0.562223 9.35266 1.27778L9.35266 18.6045L13.8357 14.1578C14.351 13.6467 15.1755 13.6467 15.6393 14.1578C15.8969 14.4133 16 14.72 16 15.0778C16 15.4356 15.8969 15.7422 15.6393 15.9978L9.04348 22.54C8.78583 22.7956 8.47665 23 8.06441 23L8.06441 22.9489Z" fill="#1313C3"/>
                </svg>                
            </a>
        </section>
        <section>
            <header id="sub-header" class="coverage">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Effective <br>
                                Software Engineering  
                            </td>
                        </tr>
                        <tr>
                            <td class="sub-title">
                                Get your engineering on track in 15 days
                            </td>
                        </tr>
                    </tbody>
                </table>
            </header>
            <article class="post">
                <table cellspacing="8">
                    <tbody>
                        <tr>
                            <td class="article-info">
                                <h2 class="article-title">
                                    <span class="article-number">01.</span>
                                    <br>
                                    Laying the Groundwork: 
                                </h2>
                                <h3 class="article-subtitle">
                                    Preparing for IT Projects.
                                </h3>
                                <hr>
                                <p class="article-text">
                                    Don’t rush to deploy technology, invest in your company growth.
                                </p>
                                <a href="#" class="learn-more">
                                    Learn more
                                </a>
                            </td>
                            <td>
                                <img class="article-image" src="./assets/image-article-1.webp" alt="image of a person working on a computer" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <hr class="separator">
            <article class="post">
                <table cellspacing="8">
                    <tbody>
                        <tr>
                            <td>
                                <img class="article-image" src="./assets/image-article-2.webp" alt="KommitOS" />
                            </td>
                            <td class="article-info">
                                <h2 class="article-title">
                                    <span class="article-number">02.</span>
                                    Operational Excellence
                                </h2>
                                <hr>
                                <p class="article-text">
                                    Explore in depth how our operations remain well-organized, efficient, and scalable.
                                </p>
                                <a href="#" class="learn-more">
                                    Learn more
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    </main>
    <footer>
        <section id="social-network-information">
            <table cellspacing="8">
                <tbody>
                    <tr>
                        <td>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0_256_118" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="34" height="34">
                                    <rect x="7.69238" y="7.69101" width="32.6923" height="32.6923" fill="url(#pattern0_256_118)"/>
                                </mask>
                                <g mask="url(#mask0_256_118)">
                                    <rect x="7.69238" y="7.69058" width="32.6923" height="32.6923" fill="white"/>
                                </g>
                                <rect x="0.962232" y="0.962232" width="48.0755" height="48.0755" stroke="white" stroke-width="1.92446"/>
                                <defs>
                                    <pattern id="pattern0_256_118" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_256_118" transform="scale(0.00195312)"/>
                                    </pattern>
                                    <image id="image0_256_118" width="512" height="512" xlink:href="data:image/png;base64,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AADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC/T/ATy2LnwFUzNHAAAAAElFTkSuQmCC"/>
                                </defs>
                            </svg> 
                        </td>
                        <td style="vertical-align: top;">
                            <span>
                                @kommit 
                            </span>
                            <br>
                            Effective Software Engineering
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <hr class="separator">
        <section id="company-information">
            <table cellspacing="18">
                <tbody>
                    <tr>
                        <td class="company-info">
                            <span>
                                +3
                            </span>
                            <br>
                            Awarded <br> Grants
                        </td>
                        <td class="company-info">
                            <span>
                                +230
                            </span>
                            <br>
                            Engineers trained in our Bootcamp
                        </td>
                        <td class="company-info">
                            <span>
                                +50
                            </span>
                            <br>
                            Engineers working  with <br> our clients
                        </td>
                        <td class="company-info">
                            <span>
                                98.9%
                            </span>
                            <br>
                            Average engineers' retention rate
                        </td>
                    </tr>
                </tbody>
            </table>                  
        </section>
        <hr class="separator">
        <section id="footer-information">
            <table style="width: 100%;">
                <tbody>
                    <tr>
                        <td style="width: 50%;">
                            <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M113.988 7.17181H106.782V14.6465H113.988V7.17181Z" fill="white"/>
                                <path d="M22.4173 8.3839H13.6105L7.20554 15.2526V0H0V28.9899H7.20554V23.0304L7.80601 22.5253L13.9107 28.9899H22.7175L12.8099 18.1818L22.5173 8.3839H22.4173Z" fill="white"/>
                                <path d="M113.988 18.0807H106.782V28.9899H113.988V18.0807Z" fill="white"/>
                                <path d="M38.2294 8.58586C36.5281 7.67677 34.6267 7.17181 32.525 7.17181C30.4234 7.17181 28.522 7.57576 26.8207 8.58586C25.1193 9.49495 23.8183 10.8081 22.8176 12.4243C21.8168 14.0405 21.4165 15.9595 21.4165 18.0807C21.4165 20.2019 21.9169 22.1212 22.8176 23.7374C23.8183 25.4546 25.1193 26.6666 26.8207 27.6767C28.522 28.5858 30.4234 29.091 32.525 29.091C34.6267 29.091 36.5281 28.6868 38.2294 27.6767C39.9307 26.7676 41.2317 25.4546 42.2325 23.7374C43.2333 22.0202 43.6336 20.2019 43.6336 18.0807C43.6336 15.9595 43.1332 14.1415 42.2325 12.4243C41.3318 10.8081 39.9307 9.49495 38.2294 8.58586ZM32.525 22.7273C29.923 22.7273 27.7213 20.606 27.7213 18.0807C27.7213 15.5555 29.923 13.4344 32.525 13.4344C35.127 13.4344 37.3287 15.5555 37.3287 18.0807C37.3287 20.606 35.127 22.7273 32.525 22.7273Z" fill="white"/>
                                <path d="M125.997 21.8183C125.096 21.8183 124.396 21.1111 124.396 20.2021V14.4445H129.8V7.27269H124.396V0H117.19V20.2021C117.19 25.0505 121.193 29.0909 126.097 28.9899H130V21.8183H125.997Z" fill="white"/>
                                <path d="M97.2748 7.17181H91.4703L87.7674 18.4849L84.4649 7.17181H78.5604L76.0584 14.5454L75.8583 14.9496L75.6581 14.1414L75.3579 12.7274V12.5252C75.3579 12.5252 75.3579 12.3233 75.3579 12.2223C75.3579 12.1213 75.3579 12.0203 75.3579 11.9192C75.3579 11.9192 75.3579 11.7172 75.3579 11.6162C74.5573 9.19192 72.2555 7.37379 69.5534 7.37379C66.8514 7.37379 64.6497 9.09081 63.8491 11.5151C63.8491 11.8181 63.749 12.0202 63.6489 12.3232C63.2486 13.9394 62.9484 15.4546 62.9484 15.9597L61.8475 22.4242C61.8475 22.4242 61.8475 22.5252 61.8475 22.6262C61.7474 22.9292 61.4472 23.2323 61.0469 23.2323C60.6466 23.2323 60.7467 23.2322 60.6466 23.1312C60.4464 23.0302 60.2463 22.6262 60.1462 22.1211L58.7451 15.3535C58.7451 14.9495 58.6451 14.6464 58.545 14.3434C58.0446 12.7272 56.9438 11.4142 55.4426 10.7072C54.642 10.3031 53.7413 10.101 52.7405 10.101C49.538 10.101 47.2363 12.4242 46.6358 15.6566C46.5357 15.9596 46.4357 16.3636 46.4357 16.6667L45.635 20.606C45.4349 21.4141 45.635 22.2223 46.1354 22.8284C46.5357 23.5355 47.2363 23.9393 48.0369 24.1413C48.8375 24.3434 49.538 24.1414 50.2386 23.7374C50.839 23.3334 51.3394 22.6264 51.4395 21.8183L52.2401 17.7779C52.2401 17.2728 52.3402 16.9698 52.7405 16.7678C52.8406 16.7678 53.0407 16.6667 53.1408 16.6667C53.4411 16.6667 53.8414 16.8688 53.9414 17.2728C53.9414 17.2728 53.9414 17.2728 53.9414 17.4748L55.0423 23.9394C55.5427 27.0707 58.0446 29.293 61.147 29.293H61.5473C61.5473 29.293 61.7474 29.293 61.8475 29.293C61.8475 29.293 61.9476 29.293 62.0477 29.293C62.0477 29.293 62.1477 29.293 62.2478 29.293C62.2478 29.293 62.448 29.293 62.5481 29.293C62.5481 29.293 62.6481 29.293 62.7482 29.293C62.7482 29.293 62.8483 29.293 62.9484 29.293C62.9484 29.293 63.1485 29.293 63.2486 29.293C63.2486 29.293 63.4487 29.293 63.5488 29.293C63.6489 29.293 63.749 29.2929 63.8491 29.1919C63.9491 29.1919 64.0492 29.192 64.1493 29.091C64.1493 29.091 64.3494 29.0909 64.3494 28.9899C64.3494 28.9899 64.4495 28.99 64.5496 28.889C64.5496 28.889 64.6497 28.889 64.7497 28.889C64.7497 28.889 64.7497 28.889 64.8498 28.889C64.8498 28.889 64.9499 28.8889 65.05 28.7879C65.05 28.7879 65.2501 28.687 65.2501 28.5859C65.2501 28.5859 65.4503 28.485 65.4503 28.384C65.5504 28.384 65.6504 28.1819 65.7505 28.0809C66.4511 27.3738 66.8514 26.5656 67.0515 25.6565C67.4518 23.8383 67.8521 22.1211 67.9522 21.6161L69.0531 15.1515C69.0531 15.1515 69.0531 15.0506 69.0531 14.9496C69.1531 14.6465 69.4534 14.3434 69.8537 14.3434C70.254 14.3434 70.1539 14.3435 70.254 14.4445C70.3541 14.4445 70.4541 14.6464 70.5542 14.8484C70.5542 15.0505 70.6543 15.2526 70.7544 15.4546L73.2563 27.4747C73.5565 28.7879 74.6574 29.7981 75.9584 29.8991H76.5588C76.759 29.8991 76.9591 29.899 77.1593 29.798C78.1601 29.495 78.8606 28.788 79.2609 27.8789C79.4611 27.4749 79.5611 27.1718 79.6612 26.8688C79.9615 26.1617 81.5627 21.9193 82.4634 19.495L85.5658 30H91.07L94.8729 20.202L97.8752 30H104.38L97.9753 8.28278L97.2748 7.17181Z" fill="white"/>
                            </svg>
                        </td>
                        <td style="width: 50%;">
                            <p>
                                16 years providing <br>
                                Effective Software Engineering.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </footer>
</body>
</html>

El lun, 27 ene 2025 a las 14:25, Jose Alejandro Zapata (<josezapata75235@gmail.com>) escribió:
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <title>newsletter template</title>
</head>
<body style="margin:0; padding: 0;">
    <style>
        body{
            margin: 0;
            padding: 0;
        }

        *{
            box-sizing: border-box;
            font-family: "Manrope", serif;
            font-weight: 400;
        }

        html{
            scroll-behavior: smooth;
        }

        h1, h2, h3 {
            all: unset;
        }

        hr{
            border: 1px solid #D0D0D0;
            margin: 8px 0;
            width: 95%;
        }

        ul{
            padding-left: 20px;
        }

        .separator{
            width: 90%;
            margin: 16px 32px;
        }

        header#main {
            background-image: url("../assets/header-coverage.webp");
            width: 100%;
            height: 143px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header#sub-header{
            background-image: url("../assets/article-coverage.webp");
            margin: 16px;
            width: 568px;
            height: 246px;
            font-size: 37px;
            line-height: 39px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
        }

        .sub-title{
            font-size: 15.92px;
            line-height: 21.74px;
            margin-top: 14px;
        }

        .coverage{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 100%;
            padding: 0px 20px;
            color: #FFFFFF;
            font-weight: 600;
        }

        #introduction{
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 32px;
        }

        #introduction span{
            width: 50%;
            margin: 10px auto;
            font-size: 60px;
            text-align: center;
            line-height: 81.96px;
        }

        #introduction section{
            width: 50%;
            font-size: 14px;
            line-height: 22.4px;
        }

        #btn-lets-chat{
            display: block;
            margin: 20px auto;
            padding: 12px 22px; 
            background-color: #1313B6;
            color: #FFFFFF;
            border: none;
            border-radius: 60px;
            height: 46px;
            width: 123px;
            font-size: 16px;
            line-height: 21.86px;
            font-weight: 500;
            text-decoration: none;
        }

        #arrow{
            display: block;
            margin: auto;
            height: 23px;
            width: 16px;
        }

        .post{
            display: flex;
            flex-direction: row;
            padding: 43px 19px;
            gap: 16px;
        }

        .article-number{
            font-size: 96px;
            line-height: 131.14px;
            color: #6B6B6B;
        }

        .article-title{
            font-size: 46px;
            line-height: 52px;
            color: #1313C3;
            display: flex;
            flex-direction: column;
        }

        .article-subtitle{
            font-size: 23.3px;
            line-height: 31.83px;
            color: #1313C3;
            margin-top: 6px;
        }

        .article-text{
            font-family: "Inter", serif;
            font-size: 14px;
            line-height: 16.94px;
            color: #6B6B6B;
            text-align: justify;
            word-spacing: -0.5px;
            padding-right: 15px;
        }

        .learn-more{
            font-size: 14px;
            line-height: 19.12px;
            font-weight: 700;
            color: #1313B6;
        }

        .article-image{
            height: 367px;
            width: 276px;
        }

        footer{
            background-color: #1313C3;
            color: #FFFFFF;
        }

        #social-network-information{
            display: flex;
            gap: 12px;
            height: 144px;
            font-size: 18.25px;
            line-height: 25.02px;
            padding: 47px 32px;
        }

        #social-network-information span{
            font-weight: 800;
        }

        #company-information{
            display: flex;
            justify-content: space-between;
            gap: 16px;
            font-size: 17px;
            line-height: 23.22px;
            color: #F4F2E9;
            height: 146px;
            padding: 16px;
        }

        .company-info{
            width: 130px;
        }

        .company-info span{
            font-size: 30px;
            line-height: 40.98px;
        }

        #footer-information{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 32px;
        }

        #footer-information p{
            font-size: 16px;
            line-height: 21.86px;
            font-weight: 700;
        }
    </style>
    <header id="main" class="coverage" style="background-image: url('./assets/header-coverage.webp');">
        <table style="width: 100%; padding: 57px 0;">
            <tbody>
                <tr >
                    <td style="padding: 0px 16px;">
                        <svg width="95" height="23" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M113.988 7.17181H106.782V14.6465H113.988V7.17181Z" fill="white"/>
                            <path d="M22.4173 8.3839H13.6105L7.20554 15.2526V0H0V28.9899H7.20554V23.0304L7.80601 22.5253L13.9107 28.9899H22.7175L12.8099 18.1818L22.5173 8.3839H22.4173Z" fill="white"/>
                            <path d="M113.988 18.0807H106.782V28.9899H113.988V18.0807Z" fill="white"/>
                            <path d="M38.2294 8.58586C36.5281 7.67677 34.6267 7.17181 32.525 7.17181C30.4234 7.17181 28.522 7.57576 26.8207 8.58586C25.1193 9.49495 23.8183 10.8081 22.8176 12.4243C21.8168 14.0405 21.4165 15.9595 21.4165 18.0807C21.4165 20.2019 21.9169 22.1212 22.8176 23.7374C23.8183 25.4546 25.1193 26.6666 26.8207 27.6767C28.522 28.5858 30.4234 29.091 32.525 29.091C34.6267 29.091 36.5281 28.6868 38.2294 27.6767C39.9307 26.7676 41.2317 25.4546 42.2325 23.7374C43.2333 22.0202 43.6336 20.2019 43.6336 18.0807C43.6336 15.9595 43.1332 14.1415 42.2325 12.4243C41.3318 10.8081 39.9307 9.49495 38.2294 8.58586ZM32.525 22.7273C29.923 22.7273 27.7213 20.606 27.7213 18.0807C27.7213 15.5555 29.923 13.4344 32.525 13.4344C35.127 13.4344 37.3287 15.5555 37.3287 18.0807C37.3287 20.606 35.127 22.7273 32.525 22.7273Z" fill="white"/>
                            <path d="M125.997 21.8183C125.096 21.8183 124.396 21.1111 124.396 20.2021V14.4445H129.8V7.27269H124.396V0H117.19V20.2021C117.19 25.0505 121.193 29.0909 126.097 28.9899H130V21.8183H125.997Z" fill="white"/>
                            <path d="M97.2748 7.17181H91.4703L87.7674 18.4849L84.4649 7.17181H78.5604L76.0584 14.5454L75.8583 14.9496L75.6581 14.1414L75.3579 12.7274V12.5252C75.3579 12.5252 75.3579 12.3233 75.3579 12.2223C75.3579 12.1213 75.3579 12.0203 75.3579 11.9192C75.3579 11.9192 75.3579 11.7172 75.3579 11.6162C74.5573 9.19192 72.2555 7.37379 69.5534 7.37379C66.8514 7.37379 64.6497 9.09081 63.8491 11.5151C63.8491 11.8181 63.749 12.0202 63.6489 12.3232C63.2486 13.9394 62.9484 15.4546 62.9484 15.9597L61.8475 22.4242C61.8475 22.4242 61.8475 22.5252 61.8475 22.6262C61.7474 22.9292 61.4472 23.2323 61.0469 23.2323C60.6466 23.2323 60.7467 23.2322 60.6466 23.1312C60.4464 23.0302 60.2463 22.6262 60.1462 22.1211L58.7451 15.3535C58.7451 14.9495 58.6451 14.6464 58.545 14.3434C58.0446 12.7272 56.9438 11.4142 55.4426 10.7072C54.642 10.3031 53.7413 10.101 52.7405 10.101C49.538 10.101 47.2363 12.4242 46.6358 15.6566C46.5357 15.9596 46.4357 16.3636 46.4357 16.6667L45.635 20.606C45.4349 21.4141 45.635 22.2223 46.1354 22.8284C46.5357 23.5355 47.2363 23.9393 48.0369 24.1413C48.8375 24.3434 49.538 24.1414 50.2386 23.7374C50.839 23.3334 51.3394 22.6264 51.4395 21.8183L52.2401 17.7779C52.2401 17.2728 52.3402 16.9698 52.7405 16.7678C52.8406 16.7678 53.0407 16.6667 53.1408 16.6667C53.4411 16.6667 53.8414 16.8688 53.9414 17.2728C53.9414 17.2728 53.9414 17.2728 53.9414 17.4748L55.0423 23.9394C55.5427 27.0707 58.0446 29.293 61.147 29.293H61.5473C61.5473 29.293 61.7474 29.293 61.8475 29.293C61.8475 29.293 61.9476 29.293 62.0477 29.293C62.0477 29.293 62.1477 29.293 62.2478 29.293C62.2478 29.293 62.448 29.293 62.5481 29.293C62.5481 29.293 62.6481 29.293 62.7482 29.293C62.7482 29.293 62.8483 29.293 62.9484 29.293C62.9484 29.293 63.1485 29.293 63.2486 29.293C63.2486 29.293 63.4487 29.293 63.5488 29.293C63.6489 29.293 63.749 29.2929 63.8491 29.1919C63.9491 29.1919 64.0492 29.192 64.1493 29.091C64.1493 29.091 64.3494 29.0909 64.3494 28.9899C64.3494 28.9899 64.4495 28.99 64.5496 28.889C64.5496 28.889 64.6497 28.889 64.7497 28.889C64.7497 28.889 64.7497 28.889 64.8498 28.889C64.8498 28.889 64.9499 28.8889 65.05 28.7879C65.05 28.7879 65.2501 28.687 65.2501 28.5859C65.2501 28.5859 65.4503 28.485 65.4503 28.384C65.5504 28.384 65.6504 28.1819 65.7505 28.0809C66.4511 27.3738 66.8514 26.5656 67.0515 25.6565C67.4518 23.8383 67.8521 22.1211 67.9522 21.6161L69.0531 15.1515C69.0531 15.1515 69.0531 15.0506 69.0531 14.9496C69.1531 14.6465 69.4534 14.3434 69.8537 14.3434C70.254 14.3434 70.1539 14.3435 70.254 14.4445C70.3541 14.4445 70.4541 14.6464 70.5542 14.8484C70.5542 15.0505 70.6543 15.2526 70.7544 15.4546L73.2563 27.4747C73.5565 28.7879 74.6574 29.7981 75.9584 29.8991H76.5588C76.759 29.8991 76.9591 29.899 77.1593 29.798C78.1601 29.495 78.8606 28.788 79.2609 27.8789C79.4611 27.4749 79.5611 27.1718 79.6612 26.8688C79.9615 26.1617 81.5627 21.9193 82.4634 19.495L85.5658 30H91.07L94.8729 20.202L97.8752 30H104.38L97.9753 8.28278L97.2748 7.17181Z" fill="white"/>
                        </svg>
                    </td>
                    <td style="font-family: 'Manrope', serif; font-size: 13px; line-height: 17.76px; font-weight: 600; color: #FFFFFF; text-align: end; padding: 0px 16px;">
                        Effective Software Engineering.
                    </td>
                </tr>
            </tbody>
        </table>
    </header>
    <main>
        <section style="padding: 32px;">
            <table id="introduction" style="width: 100%;">
                <tbody>
                    <tr>
                        <td rowspan="1" style="width: 30%; padding-right: 4px; padding-top: 15px; text-align: start; vertical-align: top; font-size: 60px; line-height: 57.37px; font-weight: 400; font-family: 'Manrope', serif; color:#1C1C1C;">
                            Hi there!
                        </td>
                        <td rowspan="1" style="color: #383838; font-size: 14px; font-weight: 400; font-family: 'Manrope', serif; line-height: 22.4px; width: 30%; padding-left: 4px;">
                            <p>
                                I hope you are doing well. I’m [Your Name] from the kommit team, where we’ve been supporting companies like [Recipient's Company] for over 15 years.
                            </p>
                            <P>
                                I've been following the trajectory of [Recipient's Company] for a while now and noticed that you're hiring IT staff; I believe we have a great opportunity to support your efforts. Based on your current needs, I’m confident we can help you
                            </P>
                            <ul style="padding-left: 20px;">
                                <li>Overcome engineering challenges</li>
                                <li>Scale IT operations efficiently</li>
                                <li>Drive forward innovation projects</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="#" id="btn-lets-chat" style="display: block; margin: 20px auto; padding: 14px; text-align: center;background-color: #1313B6; color: #FFFFFF; border: none; border-radius: 60px; height: 18px; width: 123px; font-size: 16px; line-height: 21.86px; font-weight: 500;  font-family: 'Manrope', serif; text-decoration: none;">
                Let’s chat!
            </a>
            <a id="arrow" style="display: block; margin: auto; height: 23px; width: 16px;" href="#sub-header">
                <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.06441 22.9489C7.65217 22.9489 7.29146 22.7445 7.03382 22.4378L0.386473 15.8444C-0.128825 15.3333 -0.128825 14.5156 0.386473 14.0556C0.901771 13.5444 1.72625 13.5444 2.19002 14.0556L6.77617 18.6045L6.77617 1.27778C6.77617 0.562223 7.34299 3.20972e-07 8.06441 3.52507e-07C8.78583 3.84041e-07 9.35266 0.562223 9.35266 1.27778L9.35266 18.6045L13.8357 14.1578C14.351 13.6467 15.1755 13.6467 15.6393 14.1578C15.8969 14.4133 16 14.72 16 15.0778C16 15.4356 15.8969 15.7422 15.6393 15.9978L9.04348 22.54C8.78583 22.7956 8.47665 23 8.06441 23L8.06441 22.9489Z" fill="#1313C3"/>
                </svg>                
            </a>
        </section>
        <section>
            <header id="sub-header" class="coverage">
                Effective <br>
                Software Engineering  
                <span class="sub-title">
                    Get your engineering on track in 15 days
                </span>
            </header>
            <article class="post">
                <div>
                    <h2 class="article-title">
                        <span class="article-number">01.</span>
                        Laying the Groundwork: 
                    </h2>
                    <h3 class="article-subtitle">
                        Preparing for IT Projects.
                    </h3>
                    <hr>
                    <p class="article-text">
                        Don’t rush to deploy technology, invest in your company growth.
                    </p>
                    <a href="#" class="learn-more">
                        Learn more
                    </a>
                </div>
                <img style="height: 367px; width: 276px;;" class="article-image" src="./assets/image-article-1.webp" alt="image of a person working on a computer" />
            </article>
            <hr class="separator">
            <article class="post">
                <img style="height: 367px; width: 276px;;" class="article-image" src="./assets/image-article-2.webp" alt="KommitOS" />
                <div>
                    <h2 class="article-title">
                        <span class="article-number">02.</span>
                        Operational Excellence
                    </h2>
                    <hr>
                    <p class="article-text">
                        Explore in depth how our operations remain well-organized, efficient, and scalable.
                    </p>
                    <a href="#" class="learn-more">
                        Learn more
                    </a>
                </div>
            </article>
        </section>
    </main>
    <footer>
        <section id="social-network-information">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_256_118" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="34" height="34">
                    <rect x="7.69238" y="7.69101" width="32.6923" height="32.6923" fill="url(#pattern0_256_118)"/>
                </mask>
                <g mask="url(#mask0_256_118)">
                    <rect x="7.69238" y="7.69058" width="32.6923" height="32.6923" fill="white"/>
                </g>
                <rect x="0.962232" y="0.962232" width="48.0755" height="48.0755" stroke="white" stroke-width="1.92446"/>
                <defs>
                    <pattern id="pattern0_256_118" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_256_118" transform="scale(0.00195312)"/>
                    </pattern>
                    <image id="image0_256_118" width="512" height="512" xlink:href="data:image/png;base64,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AADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC/T/ATy2LnwFUzNHAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>                
            <div>
                <span>
                    @kommit 
                </span>
                <br>
                Effective Software Engineering
            </div>
        </section>
        <hr class="separator">
        <section id="company-information">
            <div class="company-info">
                <span>
                    +3
                </span>
                <br>
                Awarded <br> Grants
            </div>
            <div class="company-info">
                <span>
                    +230
                </span>
                <br>
                Engineers trained in our Bootcamp
            </div>
            <div class="company-info">
                <span>
                    +50
                </span>
                <br>
                Engineers working  with <br> our clients
            </div>
            <div class="company-info">
                <span>
                    +98.9%
                </span>
                <br>
                Average engineers' retention rate
            </div>
        </section>
        <hr class="separator">
        <section id="footer-information">
            <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113.988 7.17181H106.782V14.6465H113.988V7.17181Z" fill="white"/>
                <path d="M22.4173 8.3839H13.6105L7.20554 15.2526V0H0V28.9899H7.20554V23.0304L7.80601 22.5253L13.9107 28.9899H22.7175L12.8099 18.1818L22.5173 8.3839H22.4173Z" fill="white"/>
                <path d="M113.988 18.0807H106.782V28.9899H113.988V18.0807Z" fill="white"/>
                <path d="M38.2294 8.58586C36.5281 7.67677 34.6267 7.17181 32.525 7.17181C30.4234 7.17181 28.522 7.57576 26.8207 8.58586C25.1193 9.49495 23.8183 10.8081 22.8176 12.4243C21.8168 14.0405 21.4165 15.9595 21.4165 18.0807C21.4165 20.2019 21.9169 22.1212 22.8176 23.7374C23.8183 25.4546 25.1193 26.6666 26.8207 27.6767C28.522 28.5858 30.4234 29.091 32.525 29.091C34.6267 29.091 36.5281 28.6868 38.2294 27.6767C39.9307 26.7676 41.2317 25.4546 42.2325 23.7374C43.2333 22.0202 43.6336 20.2019 43.6336 18.0807C43.6336 15.9595 43.1332 14.1415 42.2325 12.4243C41.3318 10.8081 39.9307 9.49495 38.2294 8.58586ZM32.525 22.7273C29.923 22.7273 27.7213 20.606 27.7213 18.0807C27.7213 15.5555 29.923 13.4344 32.525 13.4344C35.127 13.4344 37.3287 15.5555 37.3287 18.0807C37.3287 20.606 35.127 22.7273 32.525 22.7273Z" fill="white"/>
                <path d="M125.997 21.8183C125.096 21.8183 124.396 21.1111 124.396 20.2021V14.4445H129.8V7.27269H124.396V0H117.19V20.2021C117.19 25.0505 121.193 29.0909 126.097 28.9899H130V21.8183H125.997Z" fill="white"/>
                <path d="M97.2748 7.17181H91.4703L87.7674 18.4849L84.4649 7.17181H78.5604L76.0584 14.5454L75.8583 14.9496L75.6581 14.1414L75.3579 12.7274V12.5252C75.3579 12.5252 75.3579 12.3233 75.3579 12.2223C75.3579 12.1213 75.3579 12.0203 75.3579 11.9192C75.3579 11.9192 75.3579 11.7172 75.3579 11.6162C74.5573 9.19192 72.2555 7.37379 69.5534 7.37379C66.8514 7.37379 64.6497 9.09081 63.8491 11.5151C63.8491 11.8181 63.749 12.0202 63.6489 12.3232C63.2486 13.9394 62.9484 15.4546 62.9484 15.9597L61.8475 22.4242C61.8475 22.4242 61.8475 22.5252 61.8475 22.6262C61.7474 22.9292 61.4472 23.2323 61.0469 23.2323C60.6466 23.2323 60.7467 23.2322 60.6466 23.1312C60.4464 23.0302 60.2463 22.6262 60.1462 22.1211L58.7451 15.3535C58.7451 14.9495 58.6451 14.6464 58.545 14.3434C58.0446 12.7272 56.9438 11.4142 55.4426 10.7072C54.642 10.3031 53.7413 10.101 52.7405 10.101C49.538 10.101 47.2363 12.4242 46.6358 15.6566C46.5357 15.9596 46.4357 16.3636 46.4357 16.6667L45.635 20.606C45.4349 21.4141 45.635 22.2223 46.1354 22.8284C46.5357 23.5355 47.2363 23.9393 48.0369 24.1413C48.8375 24.3434 49.538 24.1414 50.2386 23.7374C50.839 23.3334 51.3394 22.6264 51.4395 21.8183L52.2401 17.7779C52.2401 17.2728 52.3402 16.9698 52.7405 16.7678C52.8406 16.7678 53.0407 16.6667 53.1408 16.6667C53.4411 16.6667 53.8414 16.8688 53.9414 17.2728C53.9414 17.2728 53.9414 17.2728 53.9414 17.4748L55.0423 23.9394C55.5427 27.0707 58.0446 29.293 61.147 29.293H61.5473C61.5473 29.293 61.7474 29.293 61.8475 29.293C61.8475 29.293 61.9476 29.293 62.0477 29.293C62.0477 29.293 62.1477 29.293 62.2478 29.293C62.2478 29.293 62.448 29.293 62.5481 29.293C62.5481 29.293 62.6481 29.293 62.7482 29.293C62.7482 29.293 62.8483 29.293 62.9484 29.293C62.9484 29.293 63.1485 29.293 63.2486 29.293C63.2486 29.293 63.4487 29.293 63.5488 29.293C63.6489 29.293 63.749 29.2929 63.8491 29.1919C63.9491 29.1919 64.0492 29.192 64.1493 29.091C64.1493 29.091 64.3494 29.0909 64.3494 28.9899C64.3494 28.9899 64.4495 28.99 64.5496 28.889C64.5496 28.889 64.6497 28.889 64.7497 28.889C64.7497 28.889 64.7497 28.889 64.8498 28.889C64.8498 28.889 64.9499 28.8889 65.05 28.7879C65.05 28.7879 65.2501 28.687 65.2501 28.5859C65.2501 28.5859 65.4503 28.485 65.4503 28.384C65.5504 28.384 65.6504 28.1819 65.7505 28.0809C66.4511 27.3738 66.8514 26.5656 67.0515 25.6565C67.4518 23.8383 67.8521 22.1211 67.9522 21.6161L69.0531 15.1515C69.0531 15.1515 69.0531 15.0506 69.0531 14.9496C69.1531 14.6465 69.4534 14.3434 69.8537 14.3434C70.254 14.3434 70.1539 14.3435 70.254 14.4445C70.3541 14.4445 70.4541 14.6464 70.5542 14.8484C70.5542 15.0505 70.6543 15.2526 70.7544 15.4546L73.2563 27.4747C73.5565 28.7879 74.6574 29.7981 75.9584 29.8991H76.5588C76.759 29.8991 76.9591 29.899 77.1593 29.798C78.1601 29.495 78.8606 28.788 79.2609 27.8789C79.4611 27.4749 79.5611 27.1718 79.6612 26.8688C79.9615 26.1617 81.5627 21.9193 82.4634 19.495L85.5658 30H91.07L94.8729 20.202L97.8752 30H104.38L97.9753 8.28278L97.2748 7.17181Z" fill="white"/>
            </svg>
            <p>
                16 years providing <br>
                Effective Software Engineering.
            </p>
        </section>
    </footer>
</body>
</html>

El lun, 27 ene 2025 a las 14:23, Jose Alejandro Zapata (<josezapata75235@gmail.com>) escribió:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <title>newsletter template</title>
</head>
<body style="margin:0; padding: 0;">
    <header id="main" class="coverage" style="background-image: url('./assets/header-coverage.webp'); width: 100%; height: 143px;">
        <table style="width: 100%; padding: 57px 0;">
            <tbody>
                <tr >
                    <td style="padding: 0px 16px;">
                        <svg width="95" height="23" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M113.988 7.17181H106.782V14.6465H113.988V7.17181Z" fill="white"/>
                            <path d="M22.4173 8.3839H13.6105L7.20554 15.2526V0H0V28.9899H7.20554V23.0304L7.80601 22.5253L13.9107 28.9899H22.7175L12.8099 18.1818L22.5173 8.3839H22.4173Z" fill="white"/>
                            <path d="M113.988 18.0807H106.782V28.9899H113.988V18.0807Z" fill="white"/>
                            <path d="M38.2294 8.58586C36.5281 7.67677 34.6267 7.17181 32.525 7.17181C30.4234 7.17181 28.522 7.57576 26.8207 8.58586C25.1193 9.49495 23.8183 10.8081 22.8176 12.4243C21.8168 14.0405 21.4165 15.9595 21.4165 18.0807C21.4165 20.2019 21.9169 22.1212 22.8176 23.7374C23.8183 25.4546 25.1193 26.6666 26.8207 27.6767C28.522 28.5858 30.4234 29.091 32.525 29.091C34.6267 29.091 36.5281 28.6868 38.2294 27.6767C39.9307 26.7676 41.2317 25.4546 42.2325 23.7374C43.2333 22.0202 43.6336 20.2019 43.6336 18.0807C43.6336 15.9595 43.1332 14.1415 42.2325 12.4243C41.3318 10.8081 39.9307 9.49495 38.2294 8.58586ZM32.525 22.7273C29.923 22.7273 27.7213 20.606 27.7213 18.0807C27.7213 15.5555 29.923 13.4344 32.525 13.4344C35.127 13.4344 37.3287 15.5555 37.3287 18.0807C37.3287 20.606 35.127 22.7273 32.525 22.7273Z" fill="white"/>
                            <path d="M125.997 21.8183C125.096 21.8183 124.396 21.1111 124.396 20.2021V14.4445H129.8V7.27269H124.396V0H117.19V20.2021C117.19 25.0505 121.193 29.0909 126.097 28.9899H130V21.8183H125.997Z" fill="white"/>
                            <path d="M97.2748 7.17181H91.4703L87.7674 18.4849L84.4649 7.17181H78.5604L76.0584 14.5454L75.8583 14.9496L75.6581 14.1414L75.3579 12.7274V12.5252C75.3579 12.5252 75.3579 12.3233 75.3579 12.2223C75.3579 12.1213 75.3579 12.0203 75.3579 11.9192C75.3579 11.9192 75.3579 11.7172 75.3579 11.6162C74.5573 9.19192 72.2555 7.37379 69.5534 7.37379C66.8514 7.37379 64.6497 9.09081 63.8491 11.5151C63.8491 11.8181 63.749 12.0202 63.6489 12.3232C63.2486 13.9394 62.9484 15.4546 62.9484 15.9597L61.8475 22.4242C61.8475 22.4242 61.8475 22.5252 61.8475 22.6262C61.7474 22.9292 61.4472 23.2323 61.0469 23.2323C60.6466 23.2323 60.7467 23.2322 60.6466 23.1312C60.4464 23.0302 60.2463 22.6262 60.1462 22.1211L58.7451 15.3535C58.7451 14.9495 58.6451 14.6464 58.545 14.3434C58.0446 12.7272 56.9438 11.4142 55.4426 10.7072C54.642 10.3031 53.7413 10.101 52.7405 10.101C49.538 10.101 47.2363 12.4242 46.6358 15.6566C46.5357 15.9596 46.4357 16.3636 46.4357 16.6667L45.635 20.606C45.4349 21.4141 45.635 22.2223 46.1354 22.8284C46.5357 23.5355 47.2363 23.9393 48.0369 24.1413C48.8375 24.3434 49.538 24.1414 50.2386 23.7374C50.839 23.3334 51.3394 22.6264 51.4395 21.8183L52.2401 17.7779C52.2401 17.2728 52.3402 16.9698 52.7405 16.7678C52.8406 16.7678 53.0407 16.6667 53.1408 16.6667C53.4411 16.6667 53.8414 16.8688 53.9414 17.2728C53.9414 17.2728 53.9414 17.2728 53.9414 17.4748L55.0423 23.9394C55.5427 27.0707 58.0446 29.293 61.147 29.293H61.5473C61.5473 29.293 61.7474 29.293 61.8475 29.293C61.8475 29.293 61.9476 29.293 62.0477 29.293C62.0477 29.293 62.1477 29.293 62.2478 29.293C62.2478 29.293 62.448 29.293 62.5481 29.293C62.5481 29.293 62.6481 29.293 62.7482 29.293C62.7482 29.293 62.8483 29.293 62.9484 29.293C62.9484 29.293 63.1485 29.293 63.2486 29.293C63.2486 29.293 63.4487 29.293 63.5488 29.293C63.6489 29.293 63.749 29.2929 63.8491 29.1919C63.9491 29.1919 64.0492 29.192 64.1493 29.091C64.1493 29.091 64.3494 29.0909 64.3494 28.9899C64.3494 28.9899 64.4495 28.99 64.5496 28.889C64.5496 28.889 64.6497 28.889 64.7497 28.889C64.7497 28.889 64.7497 28.889 64.8498 28.889C64.8498 28.889 64.9499 28.8889 65.05 28.7879C65.05 28.7879 65.2501 28.687 65.2501 28.5859C65.2501 28.5859 65.4503 28.485 65.4503 28.384C65.5504 28.384 65.6504 28.1819 65.7505 28.0809C66.4511 27.3738 66.8514 26.5656 67.0515 25.6565C67.4518 23.8383 67.8521 22.1211 67.9522 21.6161L69.0531 15.1515C69.0531 15.1515 69.0531 15.0506 69.0531 14.9496C69.1531 14.6465 69.4534 14.3434 69.8537 14.3434C70.254 14.3434 70.1539 14.3435 70.254 14.4445C70.3541 14.4445 70.4541 14.6464 70.5542 14.8484C70.5542 15.0505 70.6543 15.2526 70.7544 15.4546L73.2563 27.4747C73.5565 28.7879 74.6574 29.7981 75.9584 29.8991H76.5588C76.759 29.8991 76.9591 29.899 77.1593 29.798C78.1601 29.495 78.8606 28.788 79.2609 27.8789C79.4611 27.4749 79.5611 27.1718 79.6612 26.8688C79.9615 26.1617 81.5627 21.9193 82.4634 19.495L85.5658 30H91.07L94.8729 20.202L97.8752 30H104.38L97.9753 8.28278L97.2748 7.17181Z" fill="white"/>
                        </svg>
                    </td>
                    <td style="font-family: 'Manrope', serif; font-size: 13px; line-height: 17.76px; font-weight: 600; color: #FFFFFF; text-align: end; padding: 0px 16px;">
                        Effective Software Engineering.
                    </td>
                </tr>
            </tbody>
        </table>
    </header>
    <main>
        <section style="padding: 32px;">
            <table id="introduction" style="width: 100%;">
                <tbody>
                    <tr>
                        <td rowspan="1" style="width: 30%; padding-right: 4px; padding-top: 15px; text-align: start; vertical-align: top; font-size: 60px; line-height: 57.37px; font-weight: 400; font-family: 'Manrope', serif; color:#1C1C1C;">
                            Hi there!
                        </td>
                        <td rowspan="1" style="color: #383838; font-size: 14px; font-weight: 400; font-family: 'Manrope', serif; line-height: 22.4px; width: 30%; padding-left: 4px;">
                            <p>
                                I hope you are doing well. I’m [Your Name] from the kommit team, where we’ve been supporting companies like [Recipient's Company] for over 15 years.
                            </p>
                            <P>
                                I've been following the trajectory of [Recipient's Company] for a while now and noticed that you're hiring IT staff; I believe we have a great opportunity to support your efforts. Based on your current needs, I’m confident we can help you
                            </P>
                            <ul style="padding-left: 20px;">
                                <li>Overcome engineering challenges</li>
                                <li>Scale IT operations efficiently</li>
                                <li>Drive forward innovation projects</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="#" id="btn-lets-chat" style="display: block; margin: 20px auto; padding: 14px; text-align: center;background-color: #1313B6; color: #FFFFFF; border: none; border-radius: 60px; height: 18px; width: 123px; font-size: 16px; line-height: 21.86px; font-weight: 500;  font-family: 'Manrope', serif; text-decoration: none;">
                Let’s chat!
            </a>
            <a id="arrow" style="display: block; margin: auto; height: 23px; width: 16px;" href="#sub-header">
                <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.06441 22.9489C7.65217 22.9489 7.29146 22.7445 7.03382 22.4378L0.386473 15.8444C-0.128825 15.3333 -0.128825 14.5156 0.386473 14.0556C0.901771 13.5444 1.72625 13.5444 2.19002 14.0556L6.77617 18.6045L6.77617 1.27778C6.77617 0.562223 7.34299 3.20972e-07 8.06441 3.52507e-07C8.78583 3.84041e-07 9.35266 0.562223 9.35266 1.27778L9.35266 18.6045L13.8357 14.1578C14.351 13.6467 15.1755 13.6467 15.6393 14.1578C15.8969 14.4133 16 14.72 16 15.0778C16 15.4356 15.8969 15.7422 15.6393 15.9978L9.04348 22.54C8.78583 22.7956 8.47665 23 8.06441 23L8.06441 22.9489Z" fill="#1313C3"/>
                </svg>                
            </a>
        </section>
        <section>
            <header id="sub-header" class="coverage">
                Effective <br>
                Software Engineering  
                <span class="sub-title">
                    Get your engineering on track in 15 days
                </span>
            </header>
            <article class="post">
                <div>
                    <h2 class="article-title">
                        <span class="article-number">01.</span>
                        Laying the Groundwork: 
                    </h2>
                    <h3 class="article-subtitle">
                        Preparing for IT Projects.
                    </h3>
                    <hr>
                    <p class="article-text">
                        Don’t rush to deploy technology, invest in your company growth.
                    </p>
                    <a href="#" class="learn-more">
                        Learn more
                    </a>
                </div>
                <img style="height: 367px; width: 276px;;" class="article-image" src="./assets/image-article-1.webp" alt="image of a person working on a computer" />
            </article>
            <hr class="separator">
            <article class="post">
                <img style="height: 367px; width: 276px;;" class="article-image" src="./assets/image-article-2.webp" alt="KommitOS" />
                <div>
                    <h2 class="article-title">
                        <span class="article-number">02.</span>
                        Operational Excellence
                    </h2>
                    <hr>
                    <p class="article-text">
                        Explore in depth how our operations remain well-organized, efficient, and scalable.
                    </p>
                    <a href="#" class="learn-more">
                        Learn more
                    </a>
                </div>
            </article>
        </section>
    </main>
    <footer>
        <section id="social-network-information">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_256_118" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="34" height="34">
                    <rect x="7.69238" y="7.69101" width="32.6923" height="32.6923" fill="url(#pattern0_256_118)"/>
                </mask>
                <g mask="url(#mask0_256_118)">
                    <rect x="7.69238" y="7.69058" width="32.6923" height="32.6923" fill="white"/>
                </g>
                <rect x="0.962232" y="0.962232" width="48.0755" height="48.0755" stroke="white" stroke-width="1.92446"/>
                <defs>
                    <pattern id="pattern0_256_118" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_256_118" transform="scale(0.00195312)"/>
                    </pattern>
                    <image id="image0_256_118" width="512" height="512" xlink:href="data:image/png;base64,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AADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC6QAAMACKQAAsEAKAAAskAIAAAukAADAAikAALBACgAALJACAAALpAAAwAIpAACwQAoAACyQAgAAC/T/ATy2LnwFUzNHAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>                
            <div>
                <span>
                    @kommit 
                </span>
                <br>
                Effective Software Engineering
            </div>
        </section>
        <hr class="separator">
        <section id="company-information">
            <div class="company-info">
                <span>
                    +3
                </span>
                <br>
                Awarded <br> Grants
            </div>
            <div class="company-info">
                <span>
                    +230
                </span>
                <br>
                Engineers trained in our Bootcamp
            </div>
            <div class="company-info">
                <span>
                    +50
                </span>
                <br>
                Engineers working  with <br> our clients
            </div>
            <div class="company-info">
                <span>
                    +98.9%
                </span>
                <br>
                Average engineers' retention rate
            </div>
        </section>
        <hr class="separator">
        <section id="footer-information">
            <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113.988 7.17181H106.782V14.6465H113.988V7.17181Z" fill="white"/>
                <path d="M22.4173 8.3839H13.6105L7.20554 15.2526V0H0V28.9899H7.20554V23.0304L7.80601 22.5253L13.9107 28.9899H22.7175L12.8099 18.1818L22.5173 8.3839H22.4173Z" fill="white"/>
                <path d="M113.988 18.0807H106.782V28.9899H113.988V18.0807Z" fill="white"/>
                <path d="M38.2294 8.58586C36.5281 7.67677 34.6267 7.17181 32.525 7.17181C30.4234 7.17181 28.522 7.57576 26.8207 8.58586C25.1193 9.49495 23.8183 10.8081 22.8176 12.4243C21.8168 14.0405 21.4165 15.9595 21.4165 18.0807C21.4165 20.2019 21.9169 22.1212 22.8176 23.7374C23.8183 25.4546 25.1193 26.6666 26.8207 27.6767C28.522 28.5858 30.4234 29.091 32.525 29.091C34.6267 29.091 36.5281 28.6868 38.2294 27.6767C39.9307 26.7676 41.2317 25.4546 42.2325 23.7374C43.2333 22.0202 43.6336 20.2019 43.6336 18.0807C43.6336 15.9595 43.1332 14.1415 42.2325 12.4243C41.3318 10.8081 39.9307 9.49495 38.2294 8.58586ZM32.525 22.7273C29.923 22.7273 27.7213 20.606 27.7213 18.0807C27.7213 15.5555 29.923 13.4344 32.525 13.4344C35.127 13.4344 37.3287 15.5555 37.3287 18.0807C37.3287 20.606 35.127 22.7273 32.525 22.7273Z" fill="white"/>
                <path d="M125.997 21.8183C125.096 21.8183 124.396 21.1111 124.396 20.2021V14.4445H129.8V7.27269H124.396V0H117.19V20.2021C117.19 25.0505 121.193 29.0909 126.097 28.9899H130V21.8183H125.997Z" fill="white"/>
                <path d="M97.2748 7.17181H91.4703L87.7674 18.4849L84.4649 7.17181H78.5604L76.0584 14.5454L75.8583 14.9496L75.6581 14.1414L75.3579 12.7274V12.5252C75.3579 12.5252 75.3579 12.3233 75.3579 12.2223C75.3579 12.1213 75.3579 12.0203 75.3579 11.9192C75.3579 11.9192 75.3579 11.7172 75.3579 11.6162C74.5573 9.19192 72.2555 7.37379 69.5534 7.37379C66.8514 7.37379 64.6497 9.09081 63.8491 11.5151C63.8491 11.8181 63.749 12.0202 63.6489 12.3232C63.2486 13.9394 62.9484 15.4546 62.9484 15.9597L61.8475 22.4242C61.8475 22.4242 61.8475 22.5252 61.8475 22.6262C61.7474 22.9292 61.4472 23.2323 61.0469 23.2323C60.6466 23.2323 60.7467 23.2322 60.6466 23.1312C60.4464 23.0302 60.2463 22.6262 60.1462 22.1211L58.7451 15.3535C58.7451 14.9495 58.6451 14.6464 58.545 14.3434C58.0446 12.7272 56.9438 11.4142 55.4426 10.7072C54.642 10.3031 53.7413 10.101 52.7405 10.101C49.538 10.101 47.2363 12.4242 46.6358 15.6566C46.5357 15.9596 46.4357 16.3636 46.4357 16.6667L45.635 20.606C45.4349 21.4141 45.635 22.2223 46.1354 22.8284C46.5357 23.5355 47.2363 23.9393 48.0369 24.1413C48.8375 24.3434 49.538 24.1414 50.2386 23.7374C50.839 23.3334 51.3394 22.6264 51.4395 21.8183L52.2401 17.7779C52.2401 17.2728 52.3402 16.9698 52.7405 16.7678C52.8406 16.7678 53.0407 16.6667 53.1408 16.6667C53.4411 16.6667 53.8414 16.8688 53.9414 17.2728C53.9414 17.2728 53.9414 17.2728 53.9414 17.4748L55.0423 23.9394C55.5427 27.0707 58.0446 29.293 61.147 29.293H61.5473C61.5473 29.293 61.7474 29.293 61.8475 29.293C61.8475 29.293 61.9476 29.293 62.0477 29.293C62.0477 29.293 62.1477 29.293 62.2478 29.293C62.2478 29.293 62.448 29.293 62.5481 29.293C62.5481 29.293 62.6481 29.293 62.7482 29.293C62.7482 29.293 62.8483 29.293 62.9484 29.293C62.9484 29.293 63.1485 29.293 63.2486 29.293C63.2486 29.293 63.4487 29.293 63.5488 29.293C63.6489 29.293 63.749 29.2929 63.8491 29.1919C63.9491 29.1919 64.0492 29.192 64.1493 29.091C64.1493 29.091 64.3494 29.0909 64.3494 28.9899C64.3494 28.9899 64.4495 28.99 64.5496 28.889C64.5496 28.889 64.6497 28.889 64.7497 28.889C64.7497 28.889 64.7497 28.889 64.8498 28.889C64.8498 28.889 64.9499 28.8889 65.05 28.7879C65.05 28.7879 65.2501 28.687 65.2501 28.5859C65.2501 28.5859 65.4503 28.485 65.4503 28.384C65.5504 28.384 65.6504 28.1819 65.7505 28.0809C66.4511 27.3738 66.8514 26.5656 67.0515 25.6565C67.4518 23.8383 67.8521 22.1211 67.9522 21.6161L69.0531 15.1515C69.0531 15.1515 69.0531 15.0506 69.0531 14.9496C69.1531 14.6465 69.4534 14.3434 69.8537 14.3434C70.254 14.3434 70.1539 14.3435 70.254 14.4445C70.3541 14.4445 70.4541 14.6464 70.5542 14.8484C70.5542 15.0505 70.6543 15.2526 70.7544 15.4546L73.2563 27.4747C73.5565 28.7879 74.6574 29.7981 75.9584 29.8991H76.5588C76.759 29.8991 76.9591 29.899 77.1593 29.798C78.1601 29.495 78.8606 28.788 79.2609 27.8789C79.4611 27.4749 79.5611 27.1718 79.6612 26.8688C79.9615 26.1617 81.5627 21.9193 82.4634 19.495L85.5658 30H91.07L94.8729 20.202L97.8752 30H104.38L97.9753 8.28278L97.2748 7.17181Z" fill="white"/>
            </svg>
            <p>
                16 years providing <br>
                Effective Software Engineering.
            </p>
        </section>
    </footer>` 
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