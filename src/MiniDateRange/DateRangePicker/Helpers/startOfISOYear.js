var getISOYear = require('./getISOYear')
var startOfISOWeek = require('./startOfISOWeek')

function startOfISOYear(dirtyDate) {
    var year = getISOYear(dirtyDate)
    var fourthOfJanuary = new Date(0)
    fourthOfJanuary.setFullYear(year, 0, 4)
    fourthOfJanuary.setHours(0, 0, 0, 0)
    var date = startOfISOWeek(fourthOfJanuary)
    return date
}

module.exports = startOfISOYear
