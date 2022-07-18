const alerts = require('../typewise-alert');
const {expect} = require('chai');
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_CONTROLLER','PASSIVE_COOLING',40)).equals('TOO_HIGH');

expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',-13)).equals('TOO_LOW');
expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',33)).equals('NORMAL');
expect(alerts.checkAndAlert('TO_EMAIL','PASSIVE_COOLING',40)).equals('TOO_HIGH');

// expect(alerts.checkAndAlert('TO_EMAIL','HI_ACTIVE_COOLING',50)).equals('TOO_HIGH');

