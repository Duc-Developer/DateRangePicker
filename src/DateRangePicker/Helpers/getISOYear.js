var parse = require('./parse');
var startOfISOWeek = require('./startOfISOWeek')

function getISOYear(dirtyDate) {
    var date = parse(dirtyDate)
    var year = date.getFullYear()

    var fourthOfJanuaryOfNextYear = new Date(0)
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

    var fourthOfJanuaryOfThisYear = new Date(0)
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year
    } else {
        return year - 1
    }
}

module.exports = getISOYear
