const coolingTypeLimit = require('./enum');
const coolType = {
  "PASSIVE_COOLING":[0,35],
  "HI_ACTIVE_COOLING":[0,45],
  "MED_ACTIVE_COOLING":[0,40]
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
  let breachType=[];
  breachType = coolingTypeLimit.coolType[coolingType];
  return inferBreach(temperatureInC,breachType[0], breachType[1]);
}
module.exports ={classifyTemperatureBreach}
