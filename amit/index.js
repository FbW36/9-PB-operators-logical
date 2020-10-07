gitlet dogIsBetter = true;
let catIsBetter = false;
// 1. a,b,c
console.log(dogIsBetter && catIsBetter);

console.log(dogIsBetter || catIsBetter);

console.log(!(dogIsBetter && catIsBetter));

// 2
let atoms = 30;
let sandGrains = 20;
let starsInSky = 10;
// ans 3 a
console.log("ans. a ==>", atoms > (sandGrains, starsInSky));

// ans 3 b
console.log("ans. b ==>", atoms != sandGrains);

// ans 3 c
console.log("ans. c ==>", starsInSky < sandGrains || starsInSky > atoms);

// ans 3 d
console.log("ans. d ==>", atoms == starsInSky || atoms != sandGrains);

// ans 3 e
console.log("ans. e ==>", atoms >= 10 && sandGrains <= 10);

// ans 3 f
console.log("ans. f ==>", atoms * starsInSky < 100 || atoms * sandGrains > 100);
