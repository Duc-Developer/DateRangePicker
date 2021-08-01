var parse = require('./parse')

function isAfter(dirtyDate, dirtyDateToCompare) {
    var date = parse(dirtyDate)
    var dateToCompare = parse(dirtyDateToCompare)
    return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter