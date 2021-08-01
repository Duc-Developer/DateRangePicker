var parse = require('./parse')

function startOfDay(dirtyDate) {
    var date = parse(dirtyDate)
    date.setHours(0, 0, 0, 0)
    return date
}

module.exports = startOfDay