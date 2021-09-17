import { calculateBMI } from '../lib/calculateBMI';
import { getHealthRisk } from '../lib/healthRisk';

// BMI Tests
test('BMI for Person with 175cm height and 75kg weight should be 24.49 kg/m2', () => {
  expect(parseFloat(calculateBMI(75, 175))).toBe(24.49);
});

test('BMI for Person with 171cm height and 96kg weight should be 32.83 kg/m2', () => {
  expect(parseFloat(calculateBMI(96, 171))).toBe(32.83);
});

// Health risk
test('For the BMI 18.4 and below, Health Risk will be Malnutrition risk and Category will be Underweight', () => {
  const test = getHealthRisk(17.5);
  expect(test[0]).toBe('Malnutrition risk');
  expect(test[1]).toBe('Underweight');
});

test('For the BMI between 18.5 and 24.9, Health Risk will be Low risk and Category will be Normal weight', () => {
  const test = getHealthRisk(20);
  expect(test[0]).toBe('Low risk');
  expect(test[1]).toBe('Normal weight');
});

test('For the BMI between 25 and 29.9, Health Risk will be Enhanced risk and Category will be Overweight', () => {
  const test = getHealthRisk(27.5);
  expect(test[0]).toBe('Enhanced risk');
  expect(test[1]).toBe('Overweight');
});

test('For the BMI between 30 and 34.9, Health Risk will be Medium risk and Category will be Moderately obese', () => {
  const test = getHealthRisk(32.5);
  expect(test[0]).toBe('Medium risk');
  expect(test[1]).toBe('Moderately obese');
});

test('For the BMI between 35 and 39.9, Health Risk will be High risk and Category will be Severely obese', () => {
  const test = getHealthRisk(37.5);
  expect(test[0]).toBe('High risk');
  expect(test[1]).toBe('Severely obese');
});

test('For the BMI above 40, Health Risk will be Very high risk and Category will be Very severely obese', () => {
  const test = getHealthRisk(42.5);
  expect(test[0]).toBe('Very high risk');
  expect(test[1]).toBe('Very severely obese');
});


test('For invalid BMI, it should return empty risk and category', () => {
  const test = getHealthRisk('aravind' as any);
  expect(test[0]).toBe('');
  expect(test[1]).toBe('');
});

