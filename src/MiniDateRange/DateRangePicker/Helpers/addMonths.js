var parse = require('./parse')
var getDaysInMonth = require('./getDaysInMonth')

function addMonths(dirtyDate, dirtyAmount) {
    var date = parse(dirtyDate)
    var amount = Number(dirtyAmount)
    var desiredMonth = date.getMonth() + amount
    var dateWithDesiredMonth = new Date(0)
    dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
    dateWithDesiredMonth.setHours(0, 0, 0, 0)
    var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
    return date
}

module.exports = addMonths
