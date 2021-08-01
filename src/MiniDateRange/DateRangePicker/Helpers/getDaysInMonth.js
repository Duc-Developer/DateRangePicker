var parse = require('./parse')

function getDaysInMonth(dirtyDate) {
    var date = parse(dirtyDate)
    var year = date.getFullYear()
    var monthIndex = date.getMonth()
    var lastDayOfMonth = new Date(0)
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
    lastDayOfMonth.setHours(0, 0, 0, 0)
    return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth
