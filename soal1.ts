function countingValleys(steps: number, path: string): number {
    let seaLevel = 0;
    let valleys = 0;
    let currentLevel = 0;

    for (let step of path) {
        if (step === 'U') {
            currentLevel++;
        } else {
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
const steps = 8;
const path = "UDDDUDUU";
console.log(countingValleys(steps, path)); // Output: 1
