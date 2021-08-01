var isDate = require('./isDate')

function isValid(dirtyDate) {
    if (isDate(dirtyDate)) {
        return !isNaN(dirtyDate)
    } else {
        throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
    }
}

module.exports = isValid
