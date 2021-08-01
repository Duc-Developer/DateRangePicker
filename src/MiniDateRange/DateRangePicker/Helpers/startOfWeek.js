var parse = require('./parse')

function startOfWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

    var date = parse(dirtyDate)
    var day = date.getDay()
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

    date.setDate(date.getDate() - diff)
    date.setHours(0, 0, 0, 0)
    return date
}

module.exports = startOfWeek