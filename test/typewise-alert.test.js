const alerts = require('../typewise-alert');
// const classifyInferBreach = require('../classifyBreach');
const {expect} = require('chai');
it('checkAndAlert', () => {
  
  expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',-13));
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',33));
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',40));

expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',-13));
expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',33));
expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',40));

expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',-13));
expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',33));
expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',50));

expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',-13));
expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',33));
expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',50));

expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',-13));
expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',33));
expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',42));

expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',-13));
expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',33));
expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',42));
  
// expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',-13)).equals('TOO_LOW');
// expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',33)).equals('NORMAL');
// expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',40)).equals('TOO_HIGH');

// expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',-13)).equals('TOO_LOW');
// expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',33)).equals('NORMAL');
// expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',40)).equals('TOO_HIGH');

// expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',-13)).equals('TOO_LOW');
// expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',33)).equals('NORMAL');
// expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',50)).equals('TOO_HIGH');

// expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',-13)).equals('TOO_LOW');
// expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',33)).equals('NORMAL');
// expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',50)).equals('TOO_HIGH');

// expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',-13)).equals('TOO_LOW');
// expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',33)).equals('NORMAL');
// expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',42)).equals('TOO_HIGH');

// expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',-13)).equals('TOO_LOW');
// expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',33)).equals('NORMAL');
// expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',42)).equals('TOO_HIGH');

});

// it('tooLowEmail', () => {
// expect(classifyInferBreach.inferBreach(-7,0,35)).equals('TOO_LOW');
//   expect(classifyInferBreach.inferBreach(33,0,35)).equals('NORMAL');
//   expect(classifyInferBreach.inferBreach(60,0,35)).equals('TOO_HIGH');
// });
// it('sendToController',() => {
//   expect(alerts.sendToController('TOO_LOW')).equals('65261 TOO_LOW');
// });

// it('tooLowEmail', () => {
// expect(alerts.tooLowEmail('To: a.b@c.com')).equals('Hi, the temperature is too low');
// });
// it('tooHighEmail', () => {
// expect(alerts.tooHighEmail('To: a.b@c.com')).equals('Hi, the temperature is too high');
// });
// it('sendToEmail', () => {
// expect(alerts.sendToEmail('TOO_HIGH')).equals('Hi, the temperature is too high');
// });
// it('sendToEmail', () => {
// expect(alerts.sendToEmail('TOO_LOW')).equals('Hi, the temperature is too low');
// });


