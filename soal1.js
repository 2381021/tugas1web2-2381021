function countingValleys(steps, path) {
    var seaLevel = 0;
    var valleys = 0;
    var currentLevel = 0;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var step = path_1[_i];
        if (step === 'U') {
            currentLevel++;
        }
        else {
            currentLevel--;
        }
        // A valley is counted when we move up to sea level from below
        if (currentLevel === seaLevel && step === 'U') {
            valleys++;
        }
    }
    return valleys;
}
// Example usage:
var steps = 8;
var path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1
