// const User = require("../models/User");
// var Mailgun = require('mailgun-js');

// var api_key = '31bfcdeb258dbfcdc5156d4df1704448-4de08e90-442bc7da';   
// //Your domain, from the Mailgun Control Panel
// var domain = 'studydrive.me';    
// //Your sending email address
// var from_who = 'info@studydrive.me';
// var host = 'api.eu.mailgun.net'
// var mailgun =  Mailgun({apiKey: api_key, domain: domain, host: host});

// var mail = '%3C%21DOCTYPE%20html%20PUBLIC%20%22-//W3C//DTD%20XHTML%201.0%20Transitional//EN%22%20%22http%3A//www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd%22%3E%0A%3Chtml%20style%3D%22width%3A100%25%3Bfont-family%3Aroboto%2C%20%27helvetica%20neue%27%2C%20helvetica%2C%20arial%2C%20sans-serif%3B-webkit-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3Bpadding%3A0%3BMargin%3A0%3B%22%3E%0A%20%3Chead%3E%20%0A%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%20%0A%20%20%3Cmeta%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1%22%20name%3D%22viewport%22%3E%20%0A%20%20%3Cmeta%20name%3D%22x-apple-disable-message-reformatting%22%3E%20%0A%20%20%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22IE%3Dedge%22%3E%20%0A%20%20%3Cmeta%20content%3D%22telephone%3Dno%22%20name%3D%22format-detection%22%3E%20%0A%20%20%3Ctitle%3EConfrim%20Account%3C/title%3E%20%0A%20%20%3C%21--%5Bif%20%28mso%2016%29%5D%3E%0A%20%20%20%20%3Cstyle%20type%3D%22text/css%22%3E%0A%20%20%20%20a%20%7Btext-decoration%3A%20none%3B%7D%0A%20%20%20%20%3C/style%3E%0A%20%20%20%20%3C%21%5Bendif%5D--%3E%20%0A%20%20%3C%21--%5Bif%20gte%20mso%209%5D%3E%3Cstyle%3Esup%20%7B%20font-size%3A%20100%25%20%21important%3B%20%7D%3C/style%3E%3C%21%5Bendif%5D--%3E%20%0A%20%20%3C%21--%5Bif%20%21mso%5D%3E%3C%21--%20--%3E%20%0A%20%20%3Clink%20href%3D%22https%3A//fonts.googleapis.com/css%3Ffamily%3DRoboto%3A400%2C400i%2C700%2C700i%22%20rel%3D%22stylesheet%22%3E%20%0A%20%20%3C%21--%3C%21%5Bendif%5D--%3E%20%0A%20%20%3Cstyle%20type%3D%22text/css%22%3E%0A@media%20only%20screen%20and%20%28max-width%3A600px%29%20%7B.st-br%20%7B%20padding-left%3A10px%21important%3B%20padding-right%3A10px%21important%20%7D%20p%2C%20ul%20li%2C%20ol%20li%2C%20a%20%7B%20font-size%3A16px%21important%3B%20line-height%3A150%25%21important%20%7D%20h1%20%7B%20font-size%3A30px%21important%3B%20text-align%3Acenter%3B%20line-height%3A120%25%21important%20%7D%20h2%20%7B%20font-size%3A26px%21important%3B%20text-align%3Acenter%3B%20line-height%3A120%25%21important%20%7D%20h3%20%7B%20font-size%3A20px%21important%3B%20text-align%3Acenter%3B%20line-height%3A120%25%21important%20%7D%20h1%20a%20%7B%20font-size%3A30px%21important%3B%20text-align%3Acenter%20%7D%20h2%20a%20%7B%20font-size%3A26px%21important%3B%20text-align%3Acenter%20%7D%20h3%20a%20%7B%20font-size%3A20px%21important%3B%20text-align%3Acenter%20%7D%20.es-menu%20td%20a%20%7B%20font-size%3A14px%21important%20%7D%20.es-header-body%20p%2C%20.es-header-body%20ul%20li%2C%20.es-header-body%20ol%20li%2C%20.es-header-body%20a%20%7B%20font-size%3A16px%21important%20%7D%20.es-footer-body%20p%2C%20.es-footer-body%20ul%20li%2C%20.es-footer-body%20ol%20li%2C%20.es-footer-body%20a%20%7B%20font-size%3A14px%21important%20%7D%20.es-infoblock%20p%2C%20.es-infoblock%20ul%20li%2C%20.es-infoblock%20ol%20li%2C%20.es-infoblock%20a%20%7B%20font-size%3A12px%21important%20%7D%20*%5Bclass%3D%22gmail-fix%22%5D%20%7B%20display%3Anone%21important%20%7D%20.es-m-txt-c%2C%20.es-m-txt-c%20h1%2C%20.es-m-txt-c%20h2%2C%20.es-m-txt-c%20h3%20%7B%20text-align%3Acenter%21important%20%7D%20.es-m-txt-r%2C%20.es-m-txt-r%20h1%2C%20.es-m-txt-r%20h2%2C%20.es-m-txt-r%20h3%20%7B%20text-align%3Aright%21important%20%7D%20.es-m-txt-l%2C%20.es-m-txt-l%20h1%2C%20.es-m-txt-l%20h2%2C%20.es-m-txt-l%20h3%20%7B%20text-align%3Aleft%21important%20%7D%20.es-m-txt-r%20img%2C%20.es-m-txt-c%20img%2C%20.es-m-txt-l%20img%20%7B%20display%3Ainline%21important%20%7D%20.es-button-border%20%7B%20display%3Ablock%21important%20%7D%20a.es-button%20%7B%20font-size%3A16px%21important%3B%20display%3Ablock%21important%3B%20border-left-width%3A0px%21important%3B%20border-right-width%3A0px%21important%20%7D%20.es-btn-fw%20%7B%20border-width%3A10px%200px%21important%3B%20text-align%3Acenter%21important%20%7D%20.es-adaptive%20table%2C%20.es-btn-fw%2C%20.es-btn-fw-brdr%2C%20.es-left%2C%20.es-right%20%7B%20width%3A100%25%21important%20%7D%20.es-content%20table%2C%20.es-header%20table%2C%20.es-footer%20table%2C%20.es-content%2C%20.es-footer%2C%20.es-header%20%7B%20width%3A100%25%21important%3B%20max-width%3A600px%21important%20%7D%20.es-adapt-td%20%7B%20display%3Ablock%21important%3B%20width%3A100%25%21important%20%7D%20.adapt-img%20%7B%20width%3A100%25%21important%3B%20height%3Aauto%21important%20%7D%20.es-m-p0%20%7B%20padding%3A0px%21important%20%7D%20.es-m-p0r%20%7B%20padding-right%3A0px%21important%20%7D%20.es-m-p0l%20%7B%20padding-left%3A0px%21important%20%7D%20.es-m-p0t%20%7B%20padding-top%3A0px%21important%20%7D%20.es-m-p0b%20%7B%20padding-bottom%3A0%21important%20%7D%20.es-m-p20b%20%7B%20padding-bottom%3A20px%21important%20%7D%20.es-mobile-hidden%2C%20.es-hidden%20%7B%20display%3Anone%21important%20%7D%20.es-desk-hidden%20%7B%20display%3Atable-row%21important%3B%20width%3Aauto%21important%3B%20overflow%3Avisible%21important%3B%20float%3Anone%21important%3B%20max-height%3Ainherit%21important%3B%20line-height%3Ainherit%21important%20%7D%20.es-desk-menu-hidden%20%7B%20display%3Atable-cell%21important%20%7D%20table.es-table-not-adapt%2C%20.esd-block-html%20table%20%7B%20width%3Aauto%21important%20%7D%20table.es-social%20%7B%20display%3Ainline-block%21important%20%7D%20table.es-social%20td%20%7B%20display%3Ainline-block%21important%20%7D%20%7D%0A.rollover%3Ahover%20.rollover-first%20%7B%0A%09max-height%3A0px%21important%3B%0A%09display%3Anone%21important%3B%0A%7D%0A.rollover%3Ahover%20.rollover-second%20%7B%0A%09max-height%3Anone%21important%3B%0A%09display%3Ablock%21important%3B%0A%7D%0A%23outlook%20a%20%7B%0A%09padding%3A0%3B%0A%7D%0A.ExternalClass%20%7B%0A%09width%3A100%25%3B%0A%7D%0A.ExternalClass%2C%0A.ExternalClass%20p%2C%0A.ExternalClass%20span%2C%0A.ExternalClass%20font%2C%0A.ExternalClass%20td%2C%0A.ExternalClass%20div%20%7B%0A%09line-height%3A100%25%3B%0A%7D%0A.es-button%20%7B%0A%09mso-style-priority%3A100%21important%3B%0A%09text-decoration%3Anone%21important%3B%0A%7D%0Aa%5Bx-apple-data-detectors%5D%20%7B%0A%09color%3Ainherit%21important%3B%0A%09text-decoration%3Anone%21important%3B%0A%09font-size%3Ainherit%21important%3B%0A%09font-family%3Ainherit%21important%3B%0A%09font-weight%3Ainherit%21important%3B%0A%09line-height%3Ainherit%21important%3B%0A%7D%0A.es-desk-hidden%20%7B%0A%09display%3Anone%3B%0A%09float%3Aleft%3B%0A%09overflow%3Ahidden%3B%0A%09width%3A0%3B%0A%09max-height%3A0%3B%0A%09line-height%3A0%3B%0A%09mso-hide%3Aall%3B%0A%7D%0A.es-button-border%3Ahover%20%7B%0A%09border-style%3Asolid%20solid%20solid%20solid%21important%3B%0A%09background%3A%23d6a700%21important%3B%0A%09border-color%3A%2342d159%20%2342d159%20%2342d159%20%2342d159%21important%3B%0A%7D%0A.es-button-border%3Ahover%20a.es-button%20%7B%0A%09background%3A%23d6a700%21important%3B%0A%09border-color%3A%23d6a700%21important%3B%0A%7D%0A%3C/style%3E%20%0A%20%3C/head%3E%20%0A%20%3Cbody%20style%3D%22width%3A100%25%3Bfont-family%3Aroboto%2C%20%27helvetica%20neue%27%2C%20helvetica%2C%20arial%2C%20sans-serif%3B-webkit-text-size-adjust%3A100%25%3B-ms-text-size-adjust%3A100%25%3Bpadding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%3Cdiv%20class%3D%22es-wrapper-color%22%20style%3D%22background-color%3A%23F6F6F6%3B%22%3E%20%0A%20%20%20%3C%21--%5Bif%20gte%20mso%209%5D%3E%0A%09%09%09%3Cv%3Abackground%20xmlns%3Av%3D%22urn%3Aschemas-microsoft-com%3Avml%22%20fill%3D%22t%22%3E%0A%09%09%09%09%3Cv%3Afill%20type%3D%22tile%22%20color%3D%22%23f6f6f6%22%3E%3C/v%3Afill%3E%0A%09%09%09%3C/v%3Abackground%3E%0A%09%09%3C%21%5Bendif%5D--%3E%20%0A%20%20%20%3Ctable%20class%3D%22es-wrapper%22%20width%3D%22100%25%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bpadding%3A0%3BMargin%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%3Bbackground-repeat%3Arepeat%3Bbackground-position%3Acenter%20top%3B%22%3E%20%0A%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%3Ctd%20class%3D%22st-br%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20class%3D%22es-header%22%20align%3D%22center%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Btable-layout%3Afixed%20%21important%3Bwidth%3A100%25%3Bbackground-color%3Atransparent%3Bbackground-repeat%3Arepeat%3Bbackground-position%3Acenter%20top%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bbackground-image%3Aurl%28https%3A//iipszo.stripocdn.email/content/guids/CABINET_d21e6d1c5a6807d34e1eb6c59a588198/images/20841560930387653.jpg%29%3Bbackground-color%3Atransparent%3Bbackground-position%3Acenter%20bottom%3Bbackground-repeat%3Ano-repeat%3B%22%20bgcolor%3D%22transparent%22%20background%3D%22https%3A//iipszo.stripocdn.email/content/guids/CABINET_d21e6d1c5a6807d34e1eb6c59a588198/images/20841560930387653.jpg%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3C%21--%5Bif%20gte%20mso%209%5D%3E%3Cv%3Arect%20xmlns%3Av%3D%22urn%3Aschemas-microsoft-com%3Avml%22%20fill%3D%22true%22%20stroke%3D%22false%22%20style%3D%22mso-width-percent%3A1000%3Bheight%3A204px%3B%22%3E%3Cv%3Afill%20type%3D%22tile%22%20src%3D%22https%3A//pics.esputnik.com/repository/home/17278/common/images/1546958148946.jpg%22%20color%3D%22%23343434%22%20origin%3D%220.5%2C%200%22%20position%3D%220.5%2C0%22%20%3E%3C/v%3Afill%3E%3Cv%3Atextbox%20inset%3D%220%2C0%2C0%2C0%22%3E%3C%21%5Bendif%5D--%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20bgcolor%3D%22transparent%22%20class%3D%22es-header-body%22%20align%3D%22center%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22600%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bbackground-color%3Atransparent%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bpadding-top%3A20px%3Bpadding-left%3A20px%3Bpadding-right%3A20px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22560%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20role%3D%22presentation%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20height%3D%2265%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3C%21--%5Bif%20gte%20mso%209%5D%3E%3C/v%3Atextbox%3E%3C/v%3Arect%3E%3C%21%5Bendif%5D--%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20class%3D%22es-content%22%20align%3D%22center%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Btable-layout%3Afixed%20%21important%3Bwidth%3A100%25%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20bgcolor%3D%22transparent%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bbackground-color%3Atransparent%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20bgcolor%3D%22transparent%22%20class%3D%22es-content-body%22%20align%3D%22center%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22600%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bbackground-color%3Atransparent%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22Margin%3A0%3Bpadding-bottom%3A15px%3Bpadding-top%3A30px%3Bpadding-left%3A30px%3Bpadding-right%3A30px%3Bborder-radius%3A10px%2010px%200px%200px%3Bbackground-color%3A%23FFFFFF%3Bbackground-position%3Aleft%20bottom%3B%22%20bgcolor%3D%22%23ffffff%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22540%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bbackground-position%3Aleft%20bottom%3B%22%20role%3D%22presentation%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%3Ch1%20style%3D%22Margin%3A0%3Bline-height%3A36px%3Bmso-line-height-rule%3Aexactly%3Bfont-family%3Atahoma%2C%20verdana%2C%20segoe%2C%20sans-serif%3Bfont-size%3A30px%3Bfont-style%3Anormal%3Bfont-weight%3Abold%3Bcolor%3A%23212121%3B%22%3EThanks%20for%20signing%20up%3C/h1%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22Margin%3A0%3Bpadding-top%3A5px%3Bpadding-bottom%3A5px%3Bpadding-left%3A30px%3Bpadding-right%3A30px%3Bborder-top-left-radius%3A0px%3Bborder-top-right-radius%3A0px%3Bborder-bottom-right-radius%3A10px%3Bborder-bottom-left-radius%3A10px%3Bbackground-color%3A%23FFFFFF%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22540%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20role%3D%22presentation%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20Click%20below%20to%20activate%20your%20account%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bpadding-left%3A30px%3Bpadding-right%3A30px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22540%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20role%3D%22presentation%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A10px%3BMargin%3A0%3B%22%3E%3Cspan%20class%3D%22es-button-border%22%20style%3D%22border-style%3Asolid%3Bborder-color%3A%232CB543%3Bbackground%3A%23FFC80A%3Bborder-width%3A0px%3Bdisplay%3Ainline-block%3Bborder-radius%3A3px%3Bwidth%3Aauto%3B%22%3E%3Ca%20href%3D%22https%3A//studydrive.me/confirmation%3Ftoken%3D'
// var email2='%22%20class%3D%22es-button%22%20target%3D%22_blank%22%20style%3D%22mso-style-priority%3A100%20%21important%3Btext-decoration%3Anone%3B-webkit-text-size-adjust%3Anone%3B-ms-text-size-adjust%3Anone%3Bmso-line-height-rule%3Aexactly%3Bfont-family%3Aroboto%2C%20%27helvetica%20neue%27%2C%20helvetica%2C%20arial%2C%20sans-serif%3Bfont-size%3A18px%3Bcolor%3A%23FFFFFF%3Bborder-style%3Asolid%3Bborder-color%3A%23FFC80A%3Bborder-width%3A10px%2020px%2010px%2020px%3Bdisplay%3Ainline-block%3Bbackground%3A%23FFC80A%3Bborder-radius%3A3px%3Bfont-weight%3Anormal%3Bfont-style%3Anormal%3Bline-height%3A22px%3Bwidth%3Aauto%3Btext-align%3Acenter%3B%22%3EActivate%3C/a%3E%3C/span%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20class%3D%22es-content%22%20align%3D%22center%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Btable-layout%3Afixed%20%21important%3Bwidth%3A100%25%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20bgcolor%3D%22transparent%22%20class%3D%22es-content-body%22%20align%3D%22center%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22600%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bbackground-color%3Atransparent%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22Margin%3A0%3Bpadding-top%3A5px%3Bpadding-bottom%3A5px%3Bpadding-left%3A30px%3Bpadding-right%3A30px%3Bborder-top-left-radius%3A0px%3Bborder-top-right-radius%3A0px%3Bborder-bottom-right-radius%3A10px%3Bborder-bottom-left-radius%3A10px%3Bbackground-color%3A%23FFFFFF%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22540%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20role%3D%22presentation%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%3Cp%20style%3D%22Margin%3A0%3B-webkit-text-size-adjust%3Anone%3B-ms-text-size-adjust%3Anone%3Bmso-line-height-rule%3Aexactly%3Bfont-size%3A16px%3Bfont-family%3Aroboto%2C%20%27helvetica%20neue%27%2C%20helvetica%2C%20arial%2C%20sans-serif%3Bline-height%3A24px%3Bcolor%3A%23131313%3B%22%3EIf%20this%20does%27t%20work%2C%20copy-paste%20this%20link%20in%20your%20browser%3C/p%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20class%3D%22es-footer%22%20align%3D%22center%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Btable-layout%3Afixed%20%21important%3Bwidth%3A100%25%3Bbackground-color%3A%23F6F6F6%3Bbackground-repeat%3Arepeat%3Bbackground-position%3Acenter%20top%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bbackground-image%3Aurl%28https%3A//iipszo.stripocdn.email/content/guids/CABINET_d21e6d1c5a6807d34e1eb6c59a588198/images/31751560930679125.jpg%29%3Bbackground-position%3Aleft%20bottom%3Bbackground-repeat%3Ano-repeat%3B%22%20background%3D%22https%3A//iipszo.stripocdn.email/content/guids/CABINET_d21e6d1c5a6807d34e1eb6c59a588198/images/31751560930679125.jpg%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20bgcolor%3D%22%2331cb4b%22%20class%3D%22es-footer-body%22%20align%3D%22center%22%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22600%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bbackground-color%3Atransparent%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bpadding-left%3A30px%3Bpadding-right%3A30px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22540%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20role%3D%22presentation%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20bgcolor%3D%22%23ffffff%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%3Cp%20style%3D%22Margin%3A0%3B-webkit-text-size-adjust%3Anone%3B-ms-text-size-adjust%3Anone%3Bmso-line-height-rule%3Aexactly%3Bfont-size%3A16px%3Bfont-family%3Aroboto%2C%20%27helvetica%20neue%27%2C%20helvetica%2C%20arial%2C%20sans-serif%3Bline-height%3A16px%3Bcolor%3A%23131313%3B%22%3E'
// var email3 ='%3C/p%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20style%3D%22Margin%3A0%3Bpadding-top%3A30px%3Bpadding-bottom%3A30px%3Bpadding-left%3A30px%3Bpadding-right%3A30px%3Bborder-top-left-radius%3A0px%3Bborder-top-right-radius%3A0px%3Bborder-bottom-right-radius%3A10px%3Bborder-bottom-left-radius%3A10px%3Bbackground-color%3A%23EFEFEF%3B%22%20align%3D%22left%22%20bgcolor%3D%22%23efefef%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%5Bif%20mso%5D%3E%3Ctable%20width%3D%22540%22%20cellpadding%3D%220%22%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cellspacing%3D%220%22%3E%3Ctr%3E%3Ctd%20width%3D%22186%22%20valign%3D%22top%22%3E%3C%21%5Bendif%5D--%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20class%3D%22es-left%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20align%3D%22left%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bfloat%3Aleft%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20class%3D%22es-m-p0r%20es-m-p20b%22%20width%3D%22166%22%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20width%3D%22100%25%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bdisplay%3Anone%3B%22%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20class%3D%22es-hidden%22%20width%3D%2220%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%5Bif%20mso%5D%3E%3C/td%3E%3Ctd%20width%3D%22165%22%20valign%3D%22top%22%3E%3C%21%5Bendif%5D--%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20class%3D%22es-left%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20align%3D%22left%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bfloat%3Aleft%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20class%3D%22es-m-p20b%22%20width%3D%22165%22%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20width%3D%22100%25%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bdisplay%3Anone%3B%22%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%5Bif%20mso%5D%3E%3C/td%3E%3Ctd%20width%3D%2220%22%3E%3C/td%3E%3Ctd%20width%3D%22169%22%20valign%3D%22top%22%3E%3C%21%5Bendif%5D--%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20class%3D%22es-right%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20align%3D%22right%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3Bfloat%3Aright%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22169%22%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20width%3D%22100%25%22%20cellspacing%3D%220%22%20cellpadding%3D%220%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bdisplay%3Anone%3B%22%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%5Bif%20mso%5D%3E%3C/td%3E%3C/tr%3E%3C/table%3E%3C%21%5Bendif%5D--%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22left%22%20style%3D%22padding%3A0%3BMargin%3A0%3Bbackground-position%3Aleft%20top%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20width%3D%22600%22%20align%3D%22center%22%20valign%3D%22top%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctable%20cellpadding%3D%220%22%20cellspacing%3D%220%22%20width%3D%22100%25%22%20role%3D%22presentation%22%20style%3D%22mso-table-lspace%3A0pt%3Bmso-table-rspace%3A0pt%3Bborder-collapse%3Acollapse%3Bborder-spacing%3A0px%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctr%20style%3D%22border-collapse%3Acollapse%3B%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ctd%20align%3D%22center%22%20height%3D%2240%22%20style%3D%22padding%3A0%3BMargin%3A0%3B%22%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%20%20%20%20%3C/table%3E%3C/td%3E%20%0A%20%20%20%20%20%3C/tr%3E%20%0A%20%20%20%3C/table%3E%20%0A%20%20%3C/div%3E%20%20%0A%20%3C/body%3E%0A%3C/html%3E'
// module.exports = function mailService() {

//     mailService.confirm = async (token, callback) => {
        
//         User.findOneAndUpdate({token: token}, {confirmed: true, token: 0}, {upsert: false})
//         .then(updatedDocument => {
//             if(updatedDocument){
//                 callback(null, JSON.parse('{"confirmed": "true"}'))
//             }
//             else{
//                 callback(JSON.parse('{"confirmed": "false"}'), null)
//             };  
//         })
//         .catch(err => console.error(`Failed to find and update document`))
//     }

//     mailService.sendConfirmationMail = (user) => {
//         var data = {
//             //Specify email data
//               from: from_who,
//             //The email to contact
//               to: user.email,
//             //Subject and text data  
//              subject: 'Welcome to Cards',
//         //   html: 'Hi  '+ user.username + ' click confirmation:' + user.token 
//             html: unescape(mail + escape(user.token) + email2 + escape("https://studydrive.me/confirmation?token=" + user.token) + email3)
            
//             }
//         mailgun.messages().send(data, function (err, body) {
//         if (err) {
//             console.log("got an error: ", err);
//             }
//             else {
//             console.log("MAIL SENT")
//             }
//         });
//         }

//     return mailService;
// }