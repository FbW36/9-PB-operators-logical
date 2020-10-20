// These exercises are aimed at making you familiar with logical operators. **Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the *correct* logical operator.**

// 0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

// 1. Check the result of:

// - a) dogIsBetter AND catIsBetter.

let check = dogIsBetter && catIsBetter;
console.log("check ==>" + check); //false
// the result is false because one of the variable catIsBetter was declarated false and AND looks for falsy cases
// - b) dogIsBetter OR catIsBetter.

let check1 = dogIsBetter || catIsBetter;
console.log("check1 ==>" + check1); //true
// the result is true because OR looks for truthy case and one of the variables was declared true

// - c) NOT (dogIsBetter AND catIsBetter).

let check2 = !(dogIsBetter && catIsBetter);
console.log("check2 ==>" + check2); //true
// the result is true because NOT revert the results

// 2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.

let atoms = 12;
let sandGrains = 17;
let starsInSky = 66;

// 3. Check the result of whether:

// - a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
let check3 = atoms > starsInSky && atoms > sandGrains;

console.log("check3 ==>" + check3); //false
// the result is false because both comparisons are false

// - b) atoms is NOT equal to sandGrains.

let check4 = atoms != sandGrains;

console.log("check4 ==>" + check4); // true
//the result is true beacuse the variables have not equal values

// - c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
let check5 = starsInSky < sandGrains || starsInSky > atoms;

console.log("check5 ==>" + check5); //true
// the result is true because one part of the comparisons is true

// - d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
let check6 = atoms == starsInSky || atoms != sandGrains;
// the result is true because one part of the comparisons is true
console.log("check6 ==>" + check6); //true

// - e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
let check7 = atoms >= 10 && sandGrains <= 10;

console.log("check7 ==>" + check7); //false
// the result is false because both parts of the comparisons are false

// - f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
let check8 = atoms * starsInSky < 100 || atoms * sandGrains > 100;

console.log("check8 ==>" + check8); //true
// the result is true because one part of the comparisons is true
// 4. BONUS: Explain in words the logic of each result in a comment after the result.
