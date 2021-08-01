var parse = require('./parse')

function endOfMonth(dirtyDate) {
    var date = parse(dirtyDate)
    var month = date.getMonth()
    date.setFullYear(date.getFullYear(), month + 1, 0)
    date.setHours(23, 59, 59, 999)
    return date
}

module.exports = endOfMonth
