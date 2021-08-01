var parse = require('./parse')

function getMonth(dirtyDate) {
    var date = parse(dirtyDate)
    var month = date.getMonth()
    return month
}

module.exports = getMonth
