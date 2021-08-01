var parse = require('./parse')

function startOfYear(dirtyDate) {
    var cleanDate = parse(dirtyDate)
    var date = new Date(0)
    date.setFullYear(cleanDate.getFullYear(), 0, 1)
    date.setHours(0, 0, 0, 0)
    return date
}

module.exports = startOfYear
