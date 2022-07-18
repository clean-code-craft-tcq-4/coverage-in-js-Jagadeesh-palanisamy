function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = classifyTemperatureBreach(batteryChar['coolingType'], temperatureInC);
  if (alertTarget == 'TO_CONTROLLER') {
    sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    sendToEmail(breachType);
  }
}
function inferBreach(value, lowerLimit, upperLimit) {
  if (value < lowerLimit) {
    return 'TOO_LOW';
  }
  if (value > upperLimit) {
    return 'TOO_HIGH';
  }
  return 'NORMAL';
}
function classifyTemperatureBreach(coolingType, temperatureInC) {
  let breachType='';
breachType = passiveCooling(coolingType,temperatureInC)
breachType = highActiveCooling(coolingType,temperatureInC)
breachType = medActiveCooling(coolingType,temperatureInC)
return breachType;
}

function passiveCooling(coolingType,temperatureInC){
  if('PASSIVE_COOLING')
  return inferBreach(temperatureInC, 0, 35);
}
function highActiveCooling(coolingType,temperatureInC){
  if('HI_ACTIVE_COOLING')
  return inferBreach(temperatureInC, 0, 45);
}
function medActiveCooling(coolingType,temperatureInC){
 if('MED_ACTIVE_COOLING')
 return inferBreach(temperatureInC, 0, 40); 
}

function sendToController(breachType) {
  const header = 0xfeed;
  const toPrint =`${header}`+' '+breachType;
  printStatement(toPrint);
}

// _enter Yes
function printStatement(statement){  
  console.log(statement);
  }

  
  function sendToEmail(breachType) {
    const recepient = 'a.b@c.com';
     toEmail = 'To: '+recepient;
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
   {checkAndAlert,inferBreach,classifyTemperatureBreach,passiveCooling,highActiveCooling,medActiveCooling,sendToController,printStatement,sendToEmail,tooLowEmail,tooHighEmail};
