var parse = require('./parse')

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse(dirtyDateLeft)
    var dateRight = parse(dirtyDateRight)
    return dateLeft.getFullYear() === dateRight.getFullYear() &&
        dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth