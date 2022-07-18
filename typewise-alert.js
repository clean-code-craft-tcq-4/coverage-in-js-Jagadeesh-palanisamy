const breach = require('./classifyBreach');
function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = breach.classifyTemperatureBreach(batteryChar['coolingType'], temperatureInC);
  if (alertTarget == 'TO_CONTROLLER') {
    sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    sendToEmail(breachType);
  }
}


function sendToController(breachType) {
  const header = 0xfeed;
  const toPrint =`${header}`+' '+breachType;
  printStatement(toPrint);
}

function printStatement(statement){  
  console.log(statement);
  }

  
  function sendToEmail(breachType) {
    const recepient = 'a.b@c.com';
    const toEmail = 'To: '+recepient;
    if (breachType == 'TOO_LOW')
    tooLowEmail(toEmail);
    if (breachType == 'TOO_HIGH')
    tooHighEmail(toEmail);
}

function tooLowEmail(toEmail){
  printStatement(toEmail);
   printStatement('Hi, the temperature is too low');
  }
function tooHighEmail(toEmail){
   printStatement(toEmail);
  printStatement('Hi, the temperature is too high');
}


module.exports =
   {checkAndAlert,sendToController,printStatement,sendToEmail,tooLowEmail,tooHighEmail};
