// exercise 0
let dogIsBetter = true;
let catIsBetter = false;

// exercise 1
console.log(dogIsBetter && catIsBetter);
// it's false bc will take the 1st falsy statement catIsBetter

console.log(dogIsBetter || catIsBetter);
// it's true bc will take the 1st truthy statement dogIsBetter

console.log(!dogIsBetter && !catIsBetter);
// it's false bc will take the 1st falsy statement !dogIsBetter

// exercise 2
let atoms = 23;
let sandGrains = 44;
let starsInSky = 5000;

// exercise 3
// 3.a)
console.log(atoms > starsInSky && atoms > sandGrains);
// atoms is not greater than starsInSky, so it is falsy
// atoms is not greater than sandGrains, so it is falsy
// as we have an AND operator, it will look for the first FALSY statement, so it will take the 1st one, atoms is not greater than starsInSky

//3.b)
console.log(atoms != sandGrains);
// atoms is not equal to sandGrains, so it is falsy

//3.c)
console.log(starsInSky < sandGrains || starsInSky > atoms);
// starsInSky is not greater than sandGrains, so it is falsy
// starsInSky is greater than atoms, so it is truthy
// as we have an OR operator, it will look for the first TRUTHY statement, so it will take the 2ND one, starsInSky is greater than atoms

//3.d)
console.log(atoms == starsInSky || atoms != sandGrains);
// atoms is not equal to starsInSky, so it is falsy
// atoms is not equal to sandGrains, so it is truthy
// as we have an OR operator, it will look for the first TRUTHY statement, so it will take the 2ND one, atoms is not equal to sandGrains

//3.e)
console.log(atoms >= 10 && sandGrains <= 10);
// atoms is greater than 10, so it is truthy
// sandGrains is not less than 10, so it is falsy
// as we have an AND operator, it will look for the first FALSY statement, so it will take the 2ND one, sandGrains is not less than 10

//3.F)
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
// atoms multipled by starsInSky is greater than 100, so it is falsy
// atoms multiplied by sandGrains is greater than 100, so it is truthy
// as we have an OR operator, it will look for the first TRUTHY statement, so it will take the 2ND one, atoms multiplied by sandGrains is greater than 100
