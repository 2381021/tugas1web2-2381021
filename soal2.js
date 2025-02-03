function gradingStudents(grades) {
    return grades.map(function (grade) {
        if (grade < 38) {
            return grade; // No rounding if grade is below 38
        }
        var nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5; // Round up if the difference is less than 3
        }
        return grade; // Otherwise, keep the original grade
    });
}
// Example usage:
var grades = [73, 67, 38, 33];
console.log(gradingStudents(grades)); // Output: [75, 67, 40, 33]
