var startOfDay = require('./startOfDay')

function isSameDay(dirtyDateLeft, dirtyDateRight) {
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
    var dateRightStartOfDay = startOfDay(dirtyDateRight)

    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay