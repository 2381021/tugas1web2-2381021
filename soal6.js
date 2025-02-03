function birthdayCakeCandles() {
    var candles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        candles[_i] = arguments[_i];
    }
    var tallestCandleAmmount = 0;
    var currentTallestCandleHeight = -1;
    for (var i = 0; i < candles.length; i++) {
        if (currentTallestCandleHeight < candles[i]) {
            tallestCandleAmmount = 1;
            currentTallestCandleHeight = candles[i];
        }
        else if (currentTallestCandleHeight == candles[i]) {
            tallestCandleAmmount++;
        }
    }
    return tallestCandleAmmount;
}
console.log(birthdayCakeCandles(4, 4, 1, 3));
