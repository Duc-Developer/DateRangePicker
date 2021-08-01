var parse = require('./parse')

function max() {
    var dirtyDates = Array.prototype.slice.call(arguments)
    var dates = dirtyDates.map(function (dirtyDate) {
        return parse(dirtyDate)
    })
    var latestTimestamp = Math.max.apply(null, dates)
    return new Date(latestTimestamp)
}

module.exports = max
