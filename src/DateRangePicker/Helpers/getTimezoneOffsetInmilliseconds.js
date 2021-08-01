var MILLISECONDS_IN_MINUTE = 60000

module.exports = function getTimezoneOffsetInmilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime())
    var baseTimezoneOffset = date.getTimezoneOffset()
    date.setSeconds(0, 0)
    var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE

    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}
