const alerts = require('../typewise-alert');
const classifyInferBreach = require('../classifyBreach');
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
  


});

it('inferBreach', () => {
expect(classifyInferBreach.inferBreach(-7,0,35));
  expect(classifyInferBreach.inferBreach(33,0,35));
  expect(classifyInferBreach.inferBreach(60,0,35));
});
it('sendToController',() => {
  expect(alerts.sendToController('TOO_LOW'));
});

it('tooLowEmail', () => {
expect(alerts.tooLowEmail('To: a.b@c.com'));
});
it('tooHighEmail', () => {
expect(alerts.tooHighEmail('To: a.b@c.com'));
});
it('sendToEmail', () => {
expect(alerts.sendToEmail('TOO_HIGH'));
});
it('sendToEmail', () => {
expect(alerts.sendToEmail('TOO_LOW'));
});


