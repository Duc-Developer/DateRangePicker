var parse = require('./parse')

function startOfMonth(dirtyDate) {
    var date = parse(dirtyDate)
    date.setDate(1)
    date.setHours(0, 0, 0, 0)
    return date
}

module.exports = startOfMonth
