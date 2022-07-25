const print = require('./enum');
function sendToEmail(breachType) {
    const recepient = 'a.b@c.com';
    const toEmail = 'To: ' + recepient;
    if (breachType == 'TOO_LOW'){
        return tooLowEmail(toEmail);
    }
   else if (breachType == 'TOO_HIGH'){
        return tooHighEmail(toEmail);
   }
}
function tooLowEmail(toEmail) {
    print.printStatement(toEmail);
    print.printStatement('Hi, the temperature is too low');
}
function tooHighEmail(toEmail) {
    print.printStatement(toEmail);
    print.printStatement('Hi, the temperature is too high');
}

module.exports = {sendToEmail}