const alerts = require('../typewise-alert');
const {expect} = require('chai');

it('infers a value lower than the minimum as TOO_LOW', () => {
  expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',50)).equals('65261 TOO_HIGH');
});
