var addMonths = require('./addMonths')

function addYears(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    return addMonths(dirtyDate, amount * 12)
}

module.exports = addYears