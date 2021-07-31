var parse = require('./parse')

function endOfWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

    var date = parse(dirtyDate)
    var day = date.getDay()
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

    date.setDate(date.getDate() + diff)
    date.setHours(23, 59, 59, 999)
    return date
}

module.exports = endOfWeek
