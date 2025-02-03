function climbingStairs(n) {
    if (n == 1)
        return 1;
    if (n == 2)
        return 2;
    var prev2 = 1;
    var prev1 = 2;
    var curr = 0;
    for (var i = 3; i <= n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
console.log(climbingStairs(8));
