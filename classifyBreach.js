const coolingTypeLimit = require('./classifyBreach');
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
