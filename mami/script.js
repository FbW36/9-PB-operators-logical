let dogIsBetter = true;
let catIsBetter = false;

console.log(dogIsBetter && catIsBetter);
console.log(dogIsBetter || catIsBetter);
console.log(!(dogIsBetter && catIsBetter));

let atoms = 10;
let sandGrains = 20;
let starsInSky = 30;
//a
console.log(atoms > starsInSky && atoms > sandGrains); // false!  &&  both has to be true
//b
console.log(starsInSky !== sandGrains); //true!or operator is when one of them is true and can make it ture. number given to these variable is not same(10 !== 20) so true.
//c
console.log(starsInSky < sandGrains || starsInSky > atoms); // true. or operator is when one of them is true and can make it ture. starsInSky30 > atoms10 is true.
//d
console.log(atoms === starsInSky || atoms !== sandGrains); //true.or operator is when one of them is true and can make it ture.atoms !== sandGrains is true
//e
console.log(atoms >= 10 && sandGrains <= 10); //false !sandGrains <= 10 is false && is both has to be true
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100); //or operator is when one of them is true and can make it ture.atoms * sandGrains > 100 is true
