const breach = require('./classifyBreach');
async function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
 breach.classifyTemperatureBreach(batteryChar, temperatureInC).then((breachType)=>{
   if (alertTarget == 'TO_CONTROLLER') {
    sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    sendToEmail(breachType);
  }
 });


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
  return 'TOO_LOW'
  }
function tooHighEmail(toEmail){
   printStatement(toEmail);
  printStatement('Hi, the temperature is too high');
  return 'TOO_HIGH'
}


module.exports =
   {checkAndAlert,sendToController,printStatement,sendToEmail,tooLowEmail,tooHighEmail};
