const util = require('./util.js');

// Returns formatted date given, month, day, and year
var formatDate = function(m, d, y) {
    m = util.checkZeros(m + 1, 2);
    d = util.checkZeros(d, 2);
    y -= 100;

    return m + '/' + d + '/' + y;
}

// Returns formatted time given hours, minutes, and seconds
var formatTime = function(h, m, s) {
    var t = 'AM';
    if (h >= 12) {
        t = 'PM';
        h -= 12;
    }
    h = util.checkZeros(h, 2);
    m = util.checkZeros(m, 2);
    s = util.checkZeros(s, 2);

    return h + ':' + m + ':' + s + ' ' + t + ' PDT';
};

// Returns month name based on month number
var getMonthString = function(n) {
    if (n == 0) return 'Jan';
    else if (n == 1) return 'Feb';
    else if (n == 2) return 'Mar';
    else if (n == 3) return 'Apr';
    else if (n == 4) return 'May';
    else if (n == 5) return 'Jun';
    else if (n == 6) return 'Jul';
    else if (n == 7) return 'Aug';
    else if (n == 8) return 'Sep';
    else if (n == 9) return 'Oct';
    else if (n == 10) return 'Nov';
    else if (n == 11) return 'Dec';
    else return '';
};

// Returns formatted timestamp given unix time in milliseconds
var parseUnixTime = function(n) {
    var date = new Date(n);

    var day = formatDate(date.getMonth(), date.getDate(), date.getYear());
    var time = formatTime(date.getHours(), date.getMinutes(), date.getSeconds());

    return day + ' ' + time;
};

module.exports = {
    parseUnixTime: parseUnixTime
};
