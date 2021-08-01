var parse = require('./parse')

function isWithinRange(dirtyDate, dirtyStartDate, dirtyEndDate) {
    var time = parse(dirtyDate).getTime()
    var startTime = parse(dirtyStartDate).getTime()
    var endTime = parse(dirtyEndDate).getTime()

    if (startTime > endTime) {
        throw new Error('The start of the range cannot be after the end of the range')
    }

    return time >= startTime && time <= endTime
}

module.exports = isWithinRange
