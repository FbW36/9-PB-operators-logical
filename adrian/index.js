//0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

//1
console.log(dogIsBetter && catIsBetter); // false
console.log(dogIsBetter || catIsBetter); // true
console.log(!dogIsBetter && catIsBetter); // false

//2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values.
let atoms = 0;
let sandGrains = 1;
let starsInSky = 2;

//3.Check the result of whether:
//a
console.log(atoms > starsInSky && atoms > sandGrains); // false

//b
console.log(atoms !== sandGrains); // true

//c
console.log(starsInSky < sandGrains || starsInSky > atoms); // true

//d
console.log(atoms === starsInSky || atoms !== sandGrains); //true

//e
console.log(atoms >= 10 && sandGrains <= 10); //false

//f
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); //true
