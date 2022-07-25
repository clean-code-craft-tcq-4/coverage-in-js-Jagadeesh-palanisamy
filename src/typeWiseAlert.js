const classifyBreach = require('./classifyBreach');
const controllerAlert = require('./controllerAlert');
const emailAlert = require('./emailAlert');


function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
    const breachType = classifyBreach.classifyTemperatureBreach(batteryChar, temperatureInC)
    return alertAction(breachType, alertTarget);
}

function alertAction(breachType, alertTarget) {
    if (alertTarget === 'TO_CONTROLLER') {
        return controllerAlert.sendToController(breachType);
    } else if(alertTarget === 'TO_EMAIL'){
        return emailAlert.sendToEmail(breachType);
    } 
}


module.exports ={checkAndAlert,alertAction}
