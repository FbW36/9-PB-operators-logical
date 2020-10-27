// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

// 1. Check the result of:
// - a) dogIsBetter AND catIsBetter.
console.log(dogIsBetter && catIsBetter); // false

// - b) dogIsBetter OR catIsBetter.
console.log(dogIsBetter || catIsBetter); // true

// - c) NOT (dogIsBetter AND catIsBetter).
console.log(!(dogIsBetter && catIsBetter)); // true


// 2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
let atoms = 5;
let sandGrains = 10;
let starsInSky = 20;

// 3. Check the result of whether:
// - a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log(atoms > starsInSky && atoms > sandGrains); // false

// - b) atoms is NOT equal to sandGrains.
console.log(atoms !== sandGrains); // true

// - c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log((starsInSky < sandGrains) || (starsInSky > atoms)); // true because one of statements is true

// - d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log(atoms == starsInSky || atoms !== sandGrains); // true

// - e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log(atoms >= 10 && sandGrains <= 10); // false

// - f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);

// 4. BONUS: Explain in words the logic of each result in a comment after the result.