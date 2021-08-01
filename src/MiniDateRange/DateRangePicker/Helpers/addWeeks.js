var addDays = require('./addDays')

function addWeeks(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount)
    var days = amount * 7
    return addDays(dirtyDate, days)
}

module.exports = addWeeks