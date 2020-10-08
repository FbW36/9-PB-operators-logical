//These exercises are aimed at making you familiar with logical operators. Print all your checks to the console. Every capitalized word stands for the logical operator that you must use in each task. Make sure that you are using the correct logical operator.

//Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

//Check the result of:

//a) dogIsBetter AND catIsBetter.
console.log(dogIsBetter && catIsBetter);

//b) dogIsBetter OR catIsBetter.
console.log(dogIsBetter || catIsBetter);

//c) NOT (dogIsBetter AND catIsBetter)
console.log(!(dogIsBetter && catIsBetter));

//Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
let atoms = 10;
let sandGrains = 20;
let starsInSky = 5;

//a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log("a " + (atoms > starsInSky) && atoms > sandGrains);
//It's false only the first statement is true and the second one is false and we are using && operator.

//b) atoms is NOT equal to sandGrains.
console.log("b " + (atoms !== sandGrains));
//It's true because It's not equal =  10 is not the same as 20

//c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log("c " + (starsInSky < sandGrains || starsInSky > atoms)); //it's true because the || is taking the very first "true" result starsInSky < sandGrains.

//d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log("d " + (atoms == starsInSky || atoms !== sandGrains)); //it's true because we have the || operator. and it's rule is : it will take every true statement. even the first statement is "false", || is grabbing the second result "true"

//e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log("e " + (atoms >= 10 && sandGrains <= 10));
//It's false because when using the &&, it's going to take the every "false" statement. so the first one is true BUT the second one is false. Making the result = false.

//f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log("f " + (atoms * starsInSky < 100 || atoms * sandGrains > 100));
//it's false because we're using the || function. That means that || will look for every true statement and making it the result. Since (atoms * starsInSky = 50) is less than 100, the result is True.
