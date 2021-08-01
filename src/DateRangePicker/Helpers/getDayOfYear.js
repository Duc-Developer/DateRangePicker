var parse = require('./parse')
var startOfYear = require('./startOfYear')
var differenceInCalendarDays = require('./differenceInCalendarDays')

function getDayOfYear(dirtyDate) {
    var date = parse(dirtyDate)
    var diff = differenceInCalendarDays(date, startOfYear(date))
    var dayOfYear = diff + 1
    return dayOfYear
}

module.exports = getDayOfYear
