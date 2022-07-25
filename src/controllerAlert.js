const print = require('./enum');
function sendToController(breachType) {
    const header = 0xfeed;
    const toPrint = `${header}` + ' ' + breachType;
    print.printStatement(toPrint);
}

module.exports = {sendToController};
