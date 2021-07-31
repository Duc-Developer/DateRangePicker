var parse = require('./parse')

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse(dirtyDateLeft)
    var dateRight = parse(dirtyDateRight)

    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

    return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths
