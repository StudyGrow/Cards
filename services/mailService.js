const User = require("../models/User");
var Mailgun = require('mailgun-js');

var api_key = 'bdb7750e4d509571cd3284474ac59dfe-f45b080f-59d33dcd';   
//Your domain, from the Mailgun Control Panel
var domain = 'rastoder.lu';    
//Your sending email address
var from_who = 'test@rastoder.lu';
var mailgun = new Mailgun({apiKey: api_key, domain: domain});
// backend mailService
var mail = {
    sendConfirmationMail: function(user){
        console.log("MAIL")
        var data = {
            //Specify email data
              from: from_who,
            //The email to contact
              to: user.email,
            //Subject and text data  
             subject: 'Welcome to Cards',
          html: 'Hi  '+ user.username + ' click confirmation:' + user.token 
            }
        mailgun.messages().send(data, function (err, body) {
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
            }
            else {
            console.log("MAIL")
            // res.render('submitted', { email : req.params.mail });
            console.log(body);
            }
        });
        }
    }

module.exports = mail;

module.exports = function mailService() {

    mailService.confirm = async (token, callback) => {
        
        User.findOneAndUpdate({token: token}, {confirmed: true, token: 0}, {upsert: false})
        .then(updatedDocument => {
            if(updatedDocument){
                console.log("SUCC")
                callback(null, JSON.parse('{"confirmed": "true"}'))
            }
            else{
                console.log("ERROR");
                callback(JSON.parse('{"confirmed": "false"}'), null)
            };  
        })
        .catch(err => console.error(`Failed to find and update document`))
    }
    return mailService;
}