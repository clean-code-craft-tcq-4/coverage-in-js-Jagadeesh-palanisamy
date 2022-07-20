const breach = require('./classifyBreach');
function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
    const breachType = breach.classifyTemperatureBreach(batteryChar, temperatureInC)
    return alertAction(breachType, alertTarget);
}
function alertAction(breachType, alertTarget) {
    if (alertTarget == 'TO_CONTROLLER') {
        return sendToController(breachType);
    }
    if (alertTarget == 'TO_EMAIL') {
        return sendToEmail(breachType);
    }
    return false
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
    if (breachType == 'TOO_LOW')
        return tooLowEmail(toEmail);
    if (breachType == 'TOO_HIGH')
        return tooHighEmail(toEmail);
    return false;
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
module.exports = { checkAndAlert };
