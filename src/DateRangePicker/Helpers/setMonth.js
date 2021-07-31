var parse = require('./parse')
var getDaysInMonth = require('./getDaysInMonth')

function setMonth(dirtyDate, dirtyMonth) {
    var date = parse(dirtyDate)
    var month = Number(dirtyMonth)
    var year = date.getFullYear()
    var day = date.getDate()

    var dateWithDesiredMonth = new Date(0)
    dateWithDesiredMonth.setFullYear(year, month, 15)
    dateWithDesiredMonth.setHours(0, 0, 0, 0)
    var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    date.setMonth(month, Math.min(day, daysInMonth))
    return date
}

module.exports = setMonth
