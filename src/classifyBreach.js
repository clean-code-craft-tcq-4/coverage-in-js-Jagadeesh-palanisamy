const {coolType} = require('./enum');
const inferBreach = require('./inferBreach');
function classifyTemperatureBreach(coolingType, temperatureInC) {
    let breachType=[];
    breachType = coolType[coolingType];
    return inferBreach.inferBreach(temperatureInC,breachType[0], breachType[1]);
  }
  module.exports ={classifyTemperatureBreach}
  