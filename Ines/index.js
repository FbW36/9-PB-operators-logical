let dogIsbetter = false;
let catIsbetter = true;

console.log("1.a is", dogIsbetter && catIsbetter);

console.log("1.b is", dogIsbetter || catIsbetter);

console.log("1.c is", !(dogIsbetter && catIsbetter));

let atoms = 1000;
let sandGrains = 10;
let starsInSky = 100;

console.log("2.a is", atoms > starsInSky && atoms > sandGrains);
//both statements are true so it returns the last result, which is true

console.log("2.b is", atoms !== sandGrains);
//the statement is true, they do not have the same value

console.log("2.c is", starsInSky < sandGrains || starsInSky > atoms);
//both statements are false so it returns the last statement which is false

console.log("2.d is", atoms == starsInSky || atoms !== sandGrains);
// second statement is true so it returns the second one

console.log("2.e is", atoms >= 10 && sandGrains <= 10);
//both statements are true so it returns the last one which is true

console.log("2.f is", atoms * starsInSky < 100 || atoms * sandGrains > 100);
//the second statement is true so it returns the second one
