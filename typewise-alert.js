const breach = require('./classifyBreach');
function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
const breachType= breach.classifyTemperatureBreach(batteryChar, temperatureInC)
   console.log(breachType)
   if (alertTarget == 'TO_CONTROLLER') {
    sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    sendToEmail(breachType);
  }
return breachType;
}


function sendToController(breachType) {
  const header = 0xfeed;
  const toPrint =`${header}`+' '+breachType;
  printStatement(toPrint);
  return toPrint.toString();
}

function printStatement(statement){  
  console.log(statement);
   return statement
  }

  
  function sendToEmail(breachType) {
    const recepient = 'a.b@c.com';
    const toEmail = 'To: '+recepient;
    if (breachType == 'TOO_LOW')
   return tooLowEmail(toEmail);
    if (breachType == 'TOO_HIGH')
   return tooHighEmail(toEmail);
}

function tooLowEmail(toEmail){
  printStatement(toEmail);
   return printStatement('Hi, the temperature is too low');
  }
function tooHighEmail(toEmail){
   printStatement(toEmail);
  return  printStatement('Hi, the temperature is too high');
}


module.exports ={checkAndAlert,tooLowEmail,tooHighEmail,sendToEmail,sendToController};
