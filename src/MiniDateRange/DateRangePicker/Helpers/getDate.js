var parse = require('./parse')

function getDate(dirtyDate) {
    var date = parse(dirtyDate)
    var dayOfMonth = date.getDate()
    return dayOfMonth
}

module.exports = getDate
