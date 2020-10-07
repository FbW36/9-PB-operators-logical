// 1. Two variables 
let dogIsBetter = true;
let catIsBetter = false;
console.log(dogIsBetter && catIsBetter); // false
console.log(dogIsBetter || catIsBetter); // true 
console.log(!dogIsBetter && !catIsBetter); // false 

// 2. Declear three more variables
let atoms = 7;
let sandGrains = 8;
let starslnSky = 9;
console.log(atoms > sandGrains && atoms > starslnSky); // false
console.log(atoms !== sandGrains); // true
console.log(starslnSky < sandGrains || starslnSky > atoms); // true 
console.log(atoms === starslnSky || atoms !== sandGrains); // true 
console.log(atoms >= 10 && sandGrains <= 10); // false
console.log(atoms * starslnSky < 100 || atoms * sandGrains > 100); // true 