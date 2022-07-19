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
  return breachType;
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
  return (toEmail,'Hi, the temperature is too low')
  }
function tooHighEmail(toEmail){
   printStatement(toEmail);
  printStatement('Hi, the temperature is too high');
  return (toEmail,'Hi, the temperature is too high')
}


module.exports ={checkAndAlert};
