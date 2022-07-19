const alerts = require('../typewise-alert');
const classifyInferBreach = require('../classifyBreach');
const {expect} = require('chai');
it('checkAndAlert', () => {
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',40)).equals('TOO_HIGH');

expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',40)).equals('TOO_HIGH');

expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_CONTROLLER','HI_ACTIVE_COOLING',50)).equals('TOO_HIGH');

expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',50)).equals('TOO_HIGH');

expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_CONTROLLER','MED_ACTIVE_COOLING',42)).equals('TOO_HIGH');

expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_EMAIL','MED_ACTIVE_COOLING',42)).equals('TOO_HIGH');

});
it('classifyInferBreach', () => {
expect(classifyInferBreach.inferBreach(-10,0,35)).equals('TOO_LOW');
  expect(classifyInferBreach.inferBreach(33,0,35)).equals('NORMAL');
  expect(classifyInferBreach.inferBreach(50,0,35)).equals('TOO_HIGH');
});

