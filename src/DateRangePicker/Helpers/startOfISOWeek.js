var startOfWeek = require('./startOfWeek')

function startOfISOWeek(dirtyDate) {
    return startOfWeek(dirtyDate, { weekStartsOn: 1 })
}

module.exports = startOfISOWeek
