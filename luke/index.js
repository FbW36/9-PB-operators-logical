// 0. Declare two variables: "dogIsBetter" with the value of true, and "catIsBetter" with the value of false.
let dogIsBetter = true;
let catIsBetter = false;

// 1. Check the result of:
// - a) dogIsBetter AND catIsBetter.
console.log(dogIsBetter && catIsBetter);

// - b) dogIsBetter OR catIsBetter.
console.log(dogIsBetter || catIsBetter);

// - c) NOT(dogIsBetter AND catIsBetter).
console.log(!(dogIsBetter && catIsBetter));

// 2. Declare three more variables "atoms", "sandGrains", "starsInSky".Give these variables number values.
let atoms = 100000000000000;
let sandGrains = 20000;
let starsInSky = 743489020;

// - a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
console.log(atoms > starsInSky && atoms > sandGrains);
// atoms is greater then starsInSky ==> truthy
// atoms is greater then sandGrains ==> truthy
// && operator looks at the results, since none of them are falsy by default it takes the last truthy (atoms > sandGrains)

// - b) atoms is NOT equal to sandGrains.
console.log(atoms != sandGrains);
// atoms which is (100etc...), does not equal (!=), sandGrains which is (200etc...), so that is true

// - c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
console.log(starsInSky < sandGrains || starsInSky > atoms);
// starInSky is not less then sandGrains ==> falsy
// starInSky is not greater then atoms ==> falsy
//  the not operator look for truthy and since there is none, by defualt take the last falsy (starsInSky > atoms)

// - d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
console.log(atoms == starsInSky || atoms != sandGrains);
// atoms is equal to starsInSky ==> falsy
// atoms does not equal sandgrains ==> truthy
// the or operator see the first one is false so moves on, then it see the next one is a truthy and takes it (atoms != sandGrains)

// - e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
console.log(atoms >= 10 && sandGrains <= 10);
// atoms are greater then or equal to 10 ==> truthy
// sandGrains are less then or equal to 10 ==> falsy
//  the and operator takes the see the first result is true and it moves on looking for a falsy, then it finds the second result is false so it takes that result (sandGrains <= 10)

// - f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
// atoms multiplied by starsInSky is not less then 100 ==> falsy
// atoms multiplied by sandGrains is greater then 100 ==> truthy
// the or operator look for the first truthy in this case the second one and goes with that (atoms * sandGrains > 100)
