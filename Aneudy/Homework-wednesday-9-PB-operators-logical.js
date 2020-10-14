//These exercises are aimed at making you familiar with logical operators. 
//**Print all your checks to the console. Every capitalized word stands for the logical operator 
//that you must use in each task.
// Make sure that you are using the *correct* logical operator.**

//0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of 
//false.
var dogIsbetter = true;
var catsArebetter = false;

//1. Check the result of:
//- a) dogIsBetter AND catIsBetter.
console.log(dogIsbetter == catsArebetter); 
//false - dogIsbetter is the value of true and == ask to compare the equality of both

//- b) dogIsBetter OR catIsBetter.
console.log(dogIsbetter != catsArebetter); 
//true - because != asked to compare and show the first var as true

//- c) NOT (dogIsBetter AND catIsBetter).
console.log (dogIsbetter === catsArebetter);
// false - === asks to compare the whole value of both

//2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number 
//values.
var atoms = 3;
var sanGrains = 4;
var starInsky = 5;

//3. Check the result of whether:
//- a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log(atoms > starInsky);
//false
console.log(atoms > sanGrains);
//false

//- b) atoms is NOT equal to sandGrains.
console.log(atoms == sanGrains);
//false

//- c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log(starInsky < sanGrains);#
//false
console.log(starInsky > atoms);
//true

//- d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log( atoms == starInsky);
//false
console.log( atoms != sanGrains);
//true
//- e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log(atoms > 10);
//false
console.log(sanGrains < 10);
//true 

//- f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log(atoms * starInsky < 100);
//true
console.log(atoms * sanGrains > 100);
// false 

//4. BONUS: Explain in words the logic of each result in a comment after the result.