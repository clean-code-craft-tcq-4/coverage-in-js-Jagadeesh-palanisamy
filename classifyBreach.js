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
if(coolingType==='PASSIVE_COOLING'){
 breachType =  passiveCooling();
  }
if(coolingType==='HI_ACTIVE_COOLING'){
 breachType = highActiveCooling();
}
if(coolingType==='MED_ACTIVE_COOLING'){
  breachType = medActiveCooling();
}
return breachType;

}
function passiveCooling(coolingType,temperatureInC){
  return inferBreach(temperatureInC, 0, 35);
}
function highActiveCooling(coolingType,temperatureInC){
     return inferBreach(temperatureInC, 0, 45);
}
function medActiveCooling(coolingType,temperatureInC){
    return inferBreach(temperatureInC, 0, 40); 
 }
module.exports ={classifyTemperatureBreach}
