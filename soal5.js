function angryProfessor(k, a) {
    var onTimeStudents = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTimeStudents++;
        }
    }
    if (onTimeStudents >= k)
        return "YES";
    return "NO";
}
console.log(angryProfessor(3, [-2, -1, 0, 1, 2]));
