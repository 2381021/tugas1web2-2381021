function countCamelCase(camelCaseText) {
    var countWords = 1;
    for (var i = 0; i < camelCaseText.length; i++) {
        var asciiVal = camelCaseText.charCodeAt(i);
        if (asciiVal >= 65 && asciiVal <= 90) {
            countWords++;
        }
    }
    return countWords;
}
console.log(countCamelCase("saveChangesInTheEditor"));
