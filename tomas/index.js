let dogIsBetter = true;
let catIsBetter = false;

console.log(dogIsBetter && catIsBetter); // false
console.log(dogIsBetter || catIsBetter); // true
console.log(!(dogIsBetter && catIsBetter)); // true

let atoms = 100000;
let sandGrains = 1000;
let starsInSky = 10000;

console.log('atoms is greater than starsInSky AND atoms is greater than sandGrains: ' + (atoms > starsInSky && atoms > sandGrains)); //true both, 'and' takes false value, since there is no false, output is the latter -> true

console.log('atoms is NOT equal to sandGrains: ' + (atoms != sandGrains)) // true 

console.log('starsInSky is less than sandGrains OR starsInSky is greater than atoms: ' + (starsInSky < sandGrains || starsInSky > atoms)) // false both, 'or' take true value, since there is no true, output is the last false

console.log('atoms is equal to starsInSky OR atoms is NOT equal to sandGrains: ' + (atoms == starsInSky || atoms != sandGrains)) // true latter, 'or' takes the second value that is true

console.log('atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10: ' + (atoms >= 10 && sandGrains <= 10)) // both false, output is first value, that is false

console.log('atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100: ' + (atoms * starsInSky < 100 || atoms * sandGrains > 100)) // true latter, 'or' takes true value, therefore output is true
