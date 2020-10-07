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
console.log(atoms > starsInSky && atoms > sandGrains); // false. The first part of the expression is false so the second part is not evaluated because the logical && operator is true only if all of its operands are true.

//b
console.log(atoms !== sandGrains); // true. The value assigned to the variable atoms is different to the value assigned to the variable sandGrains.

//c
console.log(starsInSky < sandGrains || starsInSky > atoms); // true. It is true because we are using the OR operator, so if only one of its operand is true, the result is going to be true. (The second part is true)

//d
console.log(atoms === starsInSky || atoms !== sandGrains); // true. It is true because we are using the OR operator, so if only one of its operand is true, the result is going to be true. (The second part is true).

//e
console.log(atoms >= 10 && sandGrains <= 10); //false. The logical && operator is true only if all of its operands are true. (In this case both operands are false)

//f
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); // true. It is true because we are using the OR operator, so if only one of its operand is true, the result is going to be true. (The first part is true).
