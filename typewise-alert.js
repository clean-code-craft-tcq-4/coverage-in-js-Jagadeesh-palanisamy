const breach = require('./classifyBreach');
function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
    const breachType = breach.classifyTemperatureBreach(batteryChar, temperatureInC)
    return alertAction(breachType, alertTarget);
}
function alertAction(breachType, alertTarget) {
    if (alertTarget == 'TO_CONTROLLER') {
        return sendToController(breachType);
    }else{
        return sendToEmail(breachType);
    }
   
}

function sendToController(breachType) {
    const header = 0xfeed;
    const toPrint = `${header}` + ' ' + breachType;
    printStatement(toPrint);
    return true;
}


function printStatement(statement) {
    console.log(statement);
}

function sendToEmail(breachType) {
    const recepient = 'a.b@c.com';
    const toEmail = 'To: ' + recepient;
    if (breachType == 'TOO_LOW'){
        return tooLowEmail(toEmail);
    }
   else if (breachType == 'TOO_HIGH'){
        return tooHighEmail(toEmail);
   }
   else  return false;
}
function tooLowEmail(toEmail) {
    printStatement(toEmail);
    printStatement('Hi, the temperature is too low');
    return true;
}
function tooHighEmail(toEmail) {
    printStatement(toEmail);
    printStatement('Hi, the temperature is too high');
    return true;
}
module.exports = { checkAndAlert,sendToController,tooLowEmail,tooHighEmail,sendToEmail };
