function drawStaircase(n) {
    for (var i = 0; i < n; i++) {
        var textInALine = "";
        for (var j = n - 1; j >= 0; j--) {
            if (i >= j) {
                textInALine += "#";
            }
            else {
                textInALine += " ";
            }
        }
        console.log(textInALine);
    }
}
drawStaircase(4);
