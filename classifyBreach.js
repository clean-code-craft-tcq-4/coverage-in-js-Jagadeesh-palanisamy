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
  if('PASSIVE_COOLING'){
  return inferBreach(temperatureInC, 0, 35);
  }
}
function highActiveCooling(coolingType,temperatureInC){
  if('HI_ACTIVE_COOLING')
  {
     return inferBreach(temperatureInC, 0, 45);
  }
}
function medActiveCooling(coolingType,temperatureInC){
 if('MED_ACTIVE_COOLING'){
    return inferBreach(temperatureInC, 0, 40); 
 }

}
module.exports ={inferBreach,classifyTemperatureBreach,passiveCooling,highActiveCooling,medActiveCooling}
