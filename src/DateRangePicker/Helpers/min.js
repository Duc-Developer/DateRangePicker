var parse = require('./parse')

function min() {
    var dirtyDates = Array.prototype.slice.call(arguments)
    var dates = dirtyDates.map(function (dirtyDate) {
        return parse(dirtyDate)
    })
    var earliestTimestamp = Math.min.apply(null, dates)
    return new Date(earliestTimestamp)
}

module.exports = min
