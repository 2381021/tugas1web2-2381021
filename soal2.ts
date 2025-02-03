function gradingStudents(grades: number[]): number[] {
    return grades.map(grade => {
        if (grade < 38) {
            return grade; // No rounding if grade is below 38
        }

        let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5; // Round up if the difference is less than 3
        }

        return grade; // Otherwise, keep the original grade
    });
}

// Example usage:
const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades)); // Output: [75, 67, 40, 33]
