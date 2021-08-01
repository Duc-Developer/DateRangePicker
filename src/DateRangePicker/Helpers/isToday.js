var startOfDay = require('./startOfDay')

function isToday(dirtyDate) {
    return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday
