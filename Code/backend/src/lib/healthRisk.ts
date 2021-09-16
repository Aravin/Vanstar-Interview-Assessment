// combination of switch and return will improve the performance.
export function getHealthRisk(bmi: number): [string, string] {

    switch (true) {
        case (bmi <= 18.4):
            return ['Malnutrition risk', 'Underweight'];
        case (bmi >= 18.5 && bmi <= 24.9):
            return ['Low risk', 'Normal weight'];
        case (bmi >= 25 && bmi <= 29.9):
            return ['Enhanced risk', 'Overweight'];
        case (bmi >= 30 && bmi <= 34.9):
            return ['Medium risk', 'Moderately obese'];
        case (bmi >= 35 && bmi <= 39.9):
            return ['High risk', 'Severely obese'];
        case (bmi >= 40):
            return ['Very high risk', 'Very severely obese'];
    }

    // failure
    return ['', ''];
}