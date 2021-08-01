var parse = require('./parse')
var startOfISOWeek = require('./startOfISOWeek')
var startOfISOYear = require('./startOfISOYear')

var MILLISECONDS_IN_WEEK = 604800000

function getISOWeek(dirtyDate) {
    var date = parse(dirtyDate)
    var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek
