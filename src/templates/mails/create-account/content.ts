export const content = (url: string) => {
  return `

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
     <meta charset="UTF-8" />
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     <!--[if !mso]><!-->
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <!--<![endif]-->
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta name="format-detection" content="telephone=no" />
     <meta name="format-detection" content="date=no" />
     <meta name="format-detection" content="address=no" />
     <meta name="format-detection" content="email=no" />
     <meta name="x-apple-disable-message-reformatting" />
     <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,100;1,100;0,200;1,200;0,300;1,300;0,400;1,400;0,500;1,500;0,600;1,600;0,700;1,700;0,800;1,800;0,900;1,900" rel="stylesheet" />
     <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,100;1,100;0,200;1,200;0,300;1,300;0,400;1,400;0,500;1,500;0,600;1,600;0,700;1,700;0,800;1,800;0,900;1,900" rel="stylesheet" />
     <title>email-confirm</title>
     <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
     <!--[if !mso]><!-->
     <style>
     @media  all {
                                                     /* cyrillic-ext */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 400;
                     src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                 }
                 /* cyrillic */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 400;
                     src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                     unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                 }
                 /* latin-ext */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 400;
                     src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                     unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                 }
                 /* latin */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 400;
                     src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                 }
                                         /* cyrillic-ext */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 500;
                     src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSxf6Xl7Gl3LX.woff2) format('woff2');
                     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                 }
                 /* cyrillic */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 500;
                     src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
                     unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                 }
                 /* latin-ext */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 500;
                     src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6Xl7Gl3LX.woff2) format('woff2');
                     unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                 }
                 /* latin */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 500;
                     src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                 }
                                                     /* cyrillic-ext */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 800;
                     font-display: swap;
                     src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                     unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                 }
                 /* cyrillic */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 800;
                     font-display: swap;
                     src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                     unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                 }
                 /* latin-ext */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 800;
                     font-display: swap;
                     src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                     unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                 }
                 /* latin */
                 @font-face {
                     font-family: 'Fira Sans';
                     font-style: normal;
                     font-weight: 800;
                     font-display: swap;
                     src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                 }
                         }
     </style>
     <!--<![endif]-->
     <style>
     html,
             body {
                 margin: 0 !important;
                 padding: 0 !important;
                 min-height: 100% !important;
                 width: 100% !important;
                 -webkit-font-smoothing: antialiased;
             }
     
             * {
                 -ms-text-size-adjust: 100%;
             }
     
             #outlook a {
                 padding: 0;
             }
     
             .ReadMsgBody,
             .ExternalClass {
                 width: 100%;
             }
     
             .ExternalClass,
             .ExternalClass p,
             .ExternalClass td,
             .ExternalClass div,
             .ExternalClass span,
             .ExternalClass font {
                 line-height: 100%;
             }
     
             div[style*="margin: 14px 0"],
             div[style*="margin: 16px 0"] {
                 margin: 0 !important;
             }
     
             table,
             td,
             th {
                 mso-table-lspace: 0 !important;
                 mso-table-rspace: 0 !important;
                 border-collapse: collapse;
             }
     
             body, td, th, p, div, li, a, span {
                 -webkit-text-size-adjust: 100%;
                 -ms-text-size-adjust: 100%;
                 mso-line-height-rule: exactly;
             }
     
             img {
                 border: 0;
                 outline: none;
                 line-height: 100%;
                 text-decoration: none;
                 -ms-interpolation-mode: bicubic;
             }
     
             a[x-apple-data-detectors] {
                 color: inherit !important;
                 text-decoration: none !important;
             }
     
             .pc-gmail-fix {
                 display: none;
                 display: none !important;
             }
     </style>
     <style>
     @media (max-width: 620px) {
     .pc-project-body {min-width: 0px !important;}
     .pc-project-container {width: 100% !important;}
     .pc-w620-view-vertical,.pc-w620-view-vertical > tbody,.pc-w620-view-vertical > tbody > tr,.pc-w620-view-vertical > tbody > tr > th,.pc-w620-view-vertical > tr,.pc-w620-view-vertical > tr > th {display: inline-block !important;width: 100% !important;}
     .pc-w620-padding-35-50-35-50 {padding: 35px 50px 35px 50px !important;}
     table.pc-w620-spacing-0-0-22-0 {margin: 0px 0px 22px 0px !important;}
     td.pc-w620-spacing-0-0-22-0,
     th.pc-w620-spacing-0-0-22-0{margin: 0 !important;padding: 0px 0px 22px 0px !important;}
     table.pc-w620-spacing-0-10-0-0 {margin: 0px 10px 0px 0px !important;}
     td.pc-w620-spacing-0-10-0-0,
     th.pc-w620-spacing-0-10-0-0{margin: 0 !important;padding: 0px 10px 0px 0px !important;}
     table.pc-w620-spacing-0-0-25-0 {margin: 0px 0px 25px 0px !important;}
     td.pc-w620-spacing-0-0-25-0,
     th.pc-w620-spacing-0-0-25-0{margin: 0 !important;padding: 0px 0px 25px 0px !important;}
     .pc-w620-padding-15-15-15-15 {padding: 15px 15px 15px 15px !important;}
     }
     @media (max-width: 520px) {
     .pc-w520-padding-30-40-30-40 {padding: 30px 40px 30px 40px !important;}
     .pc-w520-padding-10-10-10-10 {padding: 10px 10px 10px 10px !important;}
     }
     </style>
     <!--[if !mso]><!-- -->
     <style>
     @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5Vn9LjHYTQ.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5Vn9LjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v16/va9A4kDNxMZdWfMOD5VvkrCqUT7fdw.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9A4kDNxMZdWfMOD5VvkrCqUT7fcQ.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnWKneSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnWKneSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBiQyf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBiQyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v16/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnZKveSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnPKreSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnPKreSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrA6Qif2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrA6Qif2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5VvkrjHYTQ.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5VvkrjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnSKzeSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnSKzeSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrByRCf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrByRCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAWRSf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAWRSf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnLK3eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnLK3eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBKRif2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBKRif2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBuRyf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBuRyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnFK_eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnFK_eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAGQCf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAGQCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5Vn9LjHYTQ.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5Vn9LjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v16/va9A4kDNxMZdWfMOD5VvkrCqUT7fdw.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9A4kDNxMZdWfMOD5VvkrCqUT7fcQ.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnWKneSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnWKneSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBiQyf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBiQyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v16/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnZKveSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnPKreSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnPKreSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrA6Qif2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrA6Qif2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5VvkrjHYTQ.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9C4kDNxMZdWfMOD5VvkrjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnSKzeSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnSKzeSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrByRCf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrByRCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAWRSf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAWRSf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnLK3eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnLK3eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBKRif2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBKRif2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBuRyf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrBuRyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnFK_eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9B4kDNxMZdWfMOD5VnFK_eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAGQCf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v16/va9f4kDNxMZdWfMOD5VvkrAGQCf2VFk.woff2') format('woff2'); } }
     </style>
     <!--<![endif]-->
     <!--[if mso]>
        <style type="text/css">
            .pc-font-alt {
                font-family: Helvetica, Arial, sans-serif !important;
            }
        </style>
        <![endif]-->
     <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    </head>
    
    <body class="pc-font-alt" bgcolor="#f4f4f4" style="width: 100% !important;min-height: 100% !important;margin: 0 !important;padding: 0 !important;line-height: 1.5;color: #2D3A41;mso-line-height-rule: exactly;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-variant-ligatures: none;text-rendering: optimizeLegibility;-moz-osx-font-smoothing: grayscale;background-color: #f4f4f4;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;">
     <table class="pc-project-body" style="table-layout: fixed;min-width: 600px;background-color:#f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
      <tr>
       <td align="center" valign="top">
        <table class="pc-project-container" style="width: 600px; max-width: 600px;" width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
         <tr>
          <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
            <tr>
             <td valign="top">
              <!-- BEGIN MODULE: Call to action 2 -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
               <tr>
                <td style="padding: 0px 0px 0px 0px;">
                 <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                   <td valign="top" class="pc-w520-padding-30-40-30-40 pc-w620-padding-35-50-35-50" style="padding: 40px 60px 40px 60px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                    <table class="pc-txt-block-wrapper" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 10px 0px;" valign="top" align="center">
                       <table class="pc-txt-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 46px;letter-spacing: -0.6px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 36px;font-weight: 800;color: #151515;text-align: center;text-align-last: center;" align="center">
                          <div><span>Confirmer l&#39;adresse email</span>
                          </div>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <table class="pc-txt-block-wrapper" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 20px 0px;" valign="top" align="center">
                       <table class="pc-txt-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 28px;letter-spacing: -0.2px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 20px;font-weight: normal;color: #1b1b1b;text-align: center;text-align-last: center;" align="center">
                          <div><span>Bienvenue chez nous! </span>
                          </div>
                          <div><span>&#xFEFF;</span>
                          </div>
                          <div><span>Pour profiter pleinement de nos services, veuillez cliquer sur le bouton ci-dessous pour activer votre compte.</span>
                          </div>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <table class="pc-list-wrapper" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                     <tr>
                      <td valign="top" style="padding: 0px 0px 20px 0px;">
                       <table class="pc-list" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td valign="top" align="center">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-hlist pc-w620-view-vertical">
                           <tr>
                            <th align="center" valign="top" style="font-weight: normal;">
                             <!--[if mso]>
                    <a href="" target="_blank">
                        <v:roundrect href="" stroke="f" fillcolor="#1595e7" arcsize="8%" style="width: 278px;height: 52px;v-text-anchor: middle;" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word">
                            <w:anchorlock></w:anchorlock>
                            <center style="font-size: 16px;font-weight: 500;color: #ffffff;font-family: Arial, Helvetica, sans-serif;">ACTIVER MON COMPTE</center>
                        </v:roundrect>
                    </a>
                    <![endif]-->
                             <!--[if !mso]><!--><a href="${url}" style="border-radius: 8px;background-color: #1595e7;padding: 14px 18px 14px 18px;height: 24px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-weight: 500;font-size: 16px;line-height: 24px;letter-spacing: -0.2px;color: #ffffff;display: inline-block;text-align: center;text-decoration: none;white-space: nowrap;-webkit-text-size-adjust: none;" target="_blank"><span><span style="white-space: pre-wrap;">ACTIVER MON COMPTE</span></span></a>
                             <!--<![endif]-->
                            </th>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                   </td>
                  </tr>
                 </table>
                </td>
               </tr>
              </table>
              <!-- END MODULE: Call to action 2 -->
             </td>
            </tr>
            <tr>
             <td valign="top">
              <!-- BEGIN MODULE: Footer 1 -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
               <tr>
                <td style="padding: 0px 0px 0px 0px;">
                 <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                   <td valign="top" class="pc-w520-padding-10-10-10-10 pc-w620-padding-15-15-15-15" style="padding: 20px 20px 20px 20px;border-radius: 0px;background-color: #1b1b1b;" bgcolor="#1b1b1b">
                    <table class="pc-list" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                     <tr>
                      <td valign="top">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" class="pc-hlist pc-w620-view-vertical">
                        <tr>
                         <th class="pc-card-container" width="50%" valign="top" style="font-weight: normal; text-align: left; width: 50%;">
                          <table class="pc-card" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                           <tr>
                            <td valign="top" style="padding: 20px 20px 20px 20px;">
                             <table class="pc-card-inner" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <th class="pc-txt-block-container" valign="top" style="font-weight: normal; text-align: left;   padding: 0px 0px 10px 0px;">
                                <table class="pc-txt-block" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 24px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 18px;font-weight: 500;color: #ffffff;">
                                   Follow Us.</td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                              <tr>
                               <th class="pc-txt-block-container pc-w620-spacing-0-0-22-0" valign="top" style="font-weight: normal; text-align: left;   padding: 0px 0px 52px 0px;">
                                <table class="pc-txt-block" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 20px;letter-spacing: -0.2px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;color: #d8d8d8;">
                                   We are always looking for new exciting projects and collaborations. Feel free to contact us.</td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                              <tr>
                               <th class="pc-list-container" valign="top" style="font-weight: normal; text-align: left;">
                                <table class="pc-list" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td valign="top">
                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="pc-hlist">
                                    <tr>
                                     <th class="pc-img-block-container" valign="top" style="font-weight: normal; text-align: left;">
                                      <table class="pc-img-block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 20px 0px 0px;">
                                         <table class="pc-link-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-link pc-font-alt" style="text-align: left;text-align-last: left;">
                                             <img src="./../../../shared/assets/images/b27f430c0285b548375dbba5702221b7.png" class="pc-img" width="20" height="20" style="display: block;border: 0;outline: 0;line-height: 100%;-ms-interpolation-mode: bicubic;width:20px;height: auto;max-width: 100%;" alt="" />
                                            </div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </th>
                                     <th class="pc-img-block-container" valign="top" style="font-weight: normal; text-align: left;">
                                      <table class="pc-img-block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 20px 0px 0px;">
                                         <table class="pc-link-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-link pc-font-alt" style="text-align: left;text-align-last: left;">
                                             <img src="./../../../shared/assets/images/f415ddfccdf23609e099d49af42dfbd5.png" class="pc-img" width="22" height="20" style="display: block;border: 0;outline: 0;line-height: 100%;-ms-interpolation-mode: bicubic;width:22px;height: auto;max-width: 100%;" alt="" />
                                            </div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </th>
                                     <th class="pc-img-block-container" valign="top" style="font-weight: normal; text-align: left;">
                                      <table class="pc-img-block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 20px 0px 0px;">
                                         <table class="pc-link-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-link pc-font-alt" style="text-align: left;text-align-last: left;">
                                             <img src="./../../../shared/assets/images/d89d65d93ee39fec8f716aefc9b687fa.png" class="pc-img" width="20" height="20" style="display: block;border: 0;outline: 0;line-height: 100%;-ms-interpolation-mode: bicubic;width:20px;height: auto;max-width: 100%;" alt="" />
                                            </div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </th>
                                     <th class="pc-img-block-container" valign="top" style="font-weight: normal; text-align: left;">
                                      <table class="pc-img-block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top">
                                         <table class="pc-link-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-link pc-font-alt" style="text-align: left;text-align-last: left;">
                                             <img src="./../../../shared/assets/images/5a14400163a58e597a200db837a9ee39.png" class="pc-img" width="20" height="20" style="display: block;border: 0;outline: 0;line-height: 100%;-ms-interpolation-mode: bicubic;width:20px;height: auto;max-width: 100%;" alt="" />
                                            </div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </th>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </th>
                         <th class="pc-card-container" width="50%" valign="top" style="font-weight: normal; text-align: left; width: 50%;">
                          <table class="pc-card" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                           <tr>
                            <td valign="top" style="padding: 20px 20px 20px 20px;">
                             <table class="pc-card-inner" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <th class="pc-txt-block-container" valign="top" style="font-weight: normal; text-align: left;   padding: 0px 0px 10px 0px;">
                                <table class="pc-txt-block" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 24px;letter-spacing: -0.2px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 18px;font-weight: 500;color: #ffffff;">
                                   Contact us</td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                              <tr>
                               <th class="pc-txt-block-container pc-w620-spacing-0-0-25-0" valign="top" style="font-weight: normal; text-align: left;   padding: 0px 0px 45px 0px;">
                                <table class="pc-txt-block" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 20px;letter-spacing: -0.2px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 14px;font-weight: normal;color: #d8d8d8;">
                                   King street, 2901 Marmara road, New&zwnj;york, WA 98122&zwnj;-1090</td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                              <tr>
                               <th class="pc-link-block-container" valign="top" style="font-weight: normal; text-align: left;   padding: 0px 0px 8px 0px;" align="left">
                                <table class="pc-link-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                 <tr>
                                  <td valign="top" align="left">
                                   <div class="pc-link pc-font-alt" style="line-height: 24px;letter-spacing: -0.2px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 18px;font-weight: 500;color: #ffffff;text-align: left;text-align-last: left;">
                                    749-977-3440</div>
                                  </td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                              <tr>
                               <th class="pc-link-block-container" valign="top" style="font-weight: normal; text-align: left;" align="left">
                                <table class="pc-link-block" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                                 <tr>
                                  <td valign="top" align="left">
                                   <div class="pc-link pc-font-alt" style="line-height: 24px;font-family: 'Fira Sans', Helvetica, Arial, sans-serif;font-size: 14px;font-weight: 500;color: #1595e7;text-align: left;text-align-last: left;">
                                    bo.grady@nathen.biz</div>
                                  </td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </th>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                   </td>
                  </tr>
                 </table>
                </td>
               </tr>
              </table>
              <!-- END MODULE: Footer 1 -->
             </td>
            </tr>
           </table>
          </td>
         </tr>
        </table>
       </td>
      </tr>
     </table>
     <!-- Fix for Gmail on iOS -->
     <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     </div>
    </body>
    
    </html>
    
    `;
};
