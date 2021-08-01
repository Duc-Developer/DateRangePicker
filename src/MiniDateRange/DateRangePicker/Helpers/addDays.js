var parse = require('./parse')

function addDays(dirtyDate, dirtyAmount) {
    var date = parse(dirtyDate)
    var amount = Number(dirtyAmount)
    date.setDate(date.getDate() + amount)
    return date
}

module.exports = addDays