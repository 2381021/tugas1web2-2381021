function plusMinus() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var temp = new Map();
    var arrRatios = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.has(arr[i])) {
            var updatedKey = temp.get(arr[i]);
            updatedKey++;
            temp.set(arr[i], updatedKey);
        }
        else {
            temp.set(arr[i], 1);
        }
    }
    for (var _a = 0, _b = temp.values(); _a < _b.length; _a++) {
        var value = _b[_a];
        arrRatios.push((value / arr.length).toPrecision(7));
    }
    return arrRatios;
}
console.log(plusMinus(1, 1, 0, -1, -1));
