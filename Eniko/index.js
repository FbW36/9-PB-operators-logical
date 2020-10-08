// Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

// Check the result of:

// a) dogIsBetter AND catIsBetter.
console.log("dog AND cat - " + (dogIsBetter && catIsBetter));
//false - && always looks for the first (false) variable

// b) dogIsBetter OR catIsBetter.
console.log("dog OR cat - " + (dogIsBetter || catIsBetter));
// true - || is looking for the first varible that is true

// c) NOT (dogIsBetter AND catIsBetter).
console.log("not dog and cat - " + (!(dogIsBetter && catIsBetter)));
//true - ! changes every boolenian varible to its opposite

// Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
let atoms = 74954793;
let sandGrains = 847297034;
let starsInSky = 36674393;

// Check the result of whether:

// a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log("atoms is greater than starsInSky AND atoms is greater than sandGrains " + (atoms > starsInSky && atoms > sandGrains));
//false - && looks for the first false which is the second statment


// b) atoms is NOT equal to sandGrains.
console.log("atoms is NOT equal to sandGrains " + (atoms !== sandGrains));
//true - the two variables have two different numbers


// c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log("starsInSky is less than sandGrains OR starsInSky is greater than atoms " + (starsInSky < sandGrains || starsInSky > atoms));
//true - the first statment is true, and || is looking for the first true 



// d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log("atoms is equal to starsInSky OR atoms is NOT equal to sandGrains " + (atoms == starsInSky || atoms !== sandGrains));
//true - same as in C, second one is true

// e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log("atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10 " + (atoms >= 10 && sandGrains <= 10));
//false - && is look for the first false, which is the second statement


// f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log("atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100 " + (atoms * starsInSky < 100 || atoms * sandGrains > 100));
//true - the second statement is true, and || looks for true statements.

// BONUS: Explain in words the logic of each result in a comment after the result.