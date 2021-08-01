var parse = require('./parse')

function getYear(dirtyDate) {
    var date = parse(dirtyDate)
    var year = date.getFullYear()
    return year
}

module.exports = getYear