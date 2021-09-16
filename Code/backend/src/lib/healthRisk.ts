export function getHealthRisk(bmi: number) {
    let result = 'none';

    switch (true) {
        case (bmi <= 18.4):
            result = 'Malnutrition risk';
        case (bmi >= 18.5 && bmi <= 24.9):
            result = 'Low risk';
        case (bmi >= 25 && bmi <= 29.9):
            result = 'Enhanced risk';
        case (bmi >= 30 && bmi <= 34.9):
            result = 'Medium risk';
        case (bmi >= 35 && bmi <= 39.9):
            result = 'High risk';
        case (bmi >= 40):
            result = 'Very high risk';
    }
    
}