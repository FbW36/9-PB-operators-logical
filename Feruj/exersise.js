/*..... 1....*/
let dogIsBetter = true;
let catIsBetter = false;
// a
console.log(dogIsBetter && catIsBetter);
// b
console.log(dogIsBetter || catIsBetter);
// c
console.log(!(dogIsBetter && catIsBetter));
/*........2/3 ......*/
let atoms = 5;
let sandGrains = 10;
let starsInSky = 15;
// a
console.log((atoms > starsInSky) && (atoms > sandGrains));
//b
console.log(atoms != sandGrains);
// c
console.log((starsInSky < sandGrains) || (starsInSky > atoms));
//D
console.log((atoms == starsInSky) || (atoms != sandGrains));
//E
console.log(atoms >= 10 && sandGrains <= 10);
//F
console.log((atoms * starsInSky) < 100 || (atoms * sandGrains) > 100);