module.exports = function (value, fromLow, fromHigh, toLow, toHigh) {
    var a = (fromHigh - fromLow) / (value - fromLow);
    if (a === Infinity || value === fromLow) {
        return toLow;
    }
    return ((toHigh - toLow) / ((fromHigh - fromLow) / (value - fromLow))) + toLow;
};