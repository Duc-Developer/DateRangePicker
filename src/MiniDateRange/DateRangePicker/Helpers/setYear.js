var parse = require('./parse')

function setYear(dirtyDate, dirtyYear) {
    var date = parse(dirtyDate)
    var year = Number(dirtyYear)
    date.setFullYear(year)
    return date
}

module.exports = setYear