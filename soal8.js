function isPalindrome(input) {
    var j = input.length - 1;
    for (var i = 0; i < input.length / 2; i++) {
        console.log(input[i], input[j]);
        if (input[j] != input[i])
            return false;
        j--;
    }
    return true;
}
console.log(isPalindrome("10"));
