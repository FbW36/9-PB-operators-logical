let dogIsBetter = true;
let catIsBetter = false;

console.log(dogIsBetter && catIsBetter); //false
//! the result is false because the AND operator always looks for the falsy case and since we declared in the variable catIsBetter false we got the result false!
console.log(dogIsBetter || catIsBetter); //true
//! the result is true because the OR operator always looks for the truthy case and since we declared in the variable dogIsBetter true we got the result true!
console.log(!dogIsBetter && !catIsBetter); //false
//! the result is false because the AND operator always looks for the falsy case and since we gave both variables a NOT operator dogIsBetter becomes false, although catIsBetter becomes true, this does not matter here since the AND operator always goes for false!

let atoms = 30e300;
let sandGrains = 20e200;
let starsInSky = 10e100;

console.log(atoms > starsInSky && atoms > sandGrains); //true
//! Here the result is true because both operations are true, so even though the AND operator is looking for false since he can't find it he stops add the end and the result is true!
console.log(atoms !== sandGrains); //true
//! Here we used the NOT equal operator and since atoms is not equal to sandGrain the result is true!
console.log(starsInSky < sandGrains || atoms !== sandGrains); //true
//! This result is true because the OR operator looks for truthy cases, in this case both operations are true but it would also be true if just one of them would be true, because of the before mentioned behavior of the OR operator!
console.log(atoms >= 10 && sandGrains <= 10); //false
//! The result here is false, even though the first operation is true, but since we are dealing with the AND operator, who looks for falsy cases, it ignores the first true operation and jumps to the second one which is false and therefore the result is false!
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); //true
//! Again we are dealing here with an OUR operation, so even though the first operation is false the second one is true and therefore the result is true as well!



