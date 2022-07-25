const alerts =require('./../src/typeWiseAlert')
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
