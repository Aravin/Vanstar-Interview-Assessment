// calculate BMI
export function calculateBMI(weight: number, height: number) {
    const heightInMeter = (height / 100);
    return (weight / (heightInMeter * heightInMeter)).toFixed(2);
}
