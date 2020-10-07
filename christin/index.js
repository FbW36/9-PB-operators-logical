/*These exercises are aimed at making you familiar with logical operators.Print all your checks to the console.Every capitalized word stands for the logical operator that you must use in each task.Make sure that you are using the correct logical operator.*/

//Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.

let dogIsBetter = true;
let catIsBetter = false;

//1. Check the result of:

//a) dogIsBetter AND catIsBetter.
console.log(dogIsBetter && catIsBetter); // false

// Bonus: catIsBetter has a false value which is asked bei the AND-Operator so its false

// b) dogIsBetter OR catIsBetter.
console.log(dogIsBetter || catIsBetter); // true

// Bonus: dogIsBetter is true and OR-Asks if one of the variables is true so the result is TRUE

//c) NOT(dogIsBetter AND catIsBetter).
console.log(!(dogIsBetter && catIsBetter)); // true

// Bonus: Result is reversed through ! - so ist true

// 2. Declare three more variables "atoms", "sandGrains", "starsInSky".Give these variables number values.

let atoms = 24;
let sandGrains = 240;
let starsInSky = 560;

//3 check results of

// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.

console.log(atoms > starsInSky && atoms > sandGrains); // false

// Bonus: 24 is not bigger than 560 so its false = first false makes the result = false

// b atoms is NOT equal to sandGrains.

console.log(atoms !== sandGrains); // true

//Bonus: they are not  equal so its true

// c starsInSky is less than sandGrains OR starsInSky is greater than atoms.

console.log(starsInSky < sandGrains || starsInSky > atoms); // true

// Bonus: one of the answers is true so its true

//d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.

console.log(atoms === starsInSky || atoms !== sandGrains); // true

// Bonus: second answer is true so true

//e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.

console.log(atoms >= 10 && sandGrains <= 10); // false

// Bonus: one is false so false

// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.

console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); // true

// Bonus: Second answer is right so true

// BONUS: Explain in words the logic of each result in a comment after the result.
