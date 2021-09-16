import { calculateBMI } from './lib/calculateBMI.js';
import { getHealthRisk } from './lib/healthRisk.js';
import { sample } from './sample.js';

let overWeightCount = 0;

console.log('Gender', '\t', 'HeightCm', '\t', 'WeightKg', '\t', 'bmi', '\t', 'category', '\t', 'healthRisk');
const memCache = new Map();

for (const s of sample) {
    
    const bmi = calculateBMI(s.WeightKg, s.HeightCm);

    let healthRisk: [string, string];

    if (memCache.get(bmi)) {
        // retrieve from memCache
        // this will improve performance when input grows
        healthRisk = memCache.get(bmi);
    } else {
        healthRisk = getHealthRisk(parseFloat(bmi));
         // store in cache
        memCache.set(bmi, healthRisk);
    }

    if (healthRisk[1] === 'Overweight') overWeightCount++;

    // initial output
    console.log(s.Gender, '\t', s.HeightCm, '\t', s.WeightKg, '\t', bmi, '\t', healthRisk[0], '\t', healthRisk[1]);
}

// count Overweight people
console.log(`\nNumber of Overweight people = ${overWeightCount}`);