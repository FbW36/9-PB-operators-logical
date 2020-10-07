let dogIsBetter = true;
let catIsBetter = false;

// 1
console.log("a) dogIsBetter AND catIsBetter ==> ", dogIsBetter && catIsBetter);
console.log("b) dogIsBetter OR catIsBetter ==> ", dogIsBetter || catIsBetter);
console.log(
  "c) NOT (dogIsBetter AND catIsBetter ==>)",
  !(dogIsBetter && catIsBetter)
);

// 2
let atoms = 1204;
let sandGrains = 840;
let starsInSky = 74821;

// 3
let check1 = atoms > starsInSky;
let check2 = atoms > sandGrains;
console.log(
  "a) atoms is greater than starsInSky AND atoms is greater than sandGrains ==>",
  check1 && check2
);

console.log("b) atoms is NOT equal to sandGrains ==> ", atoms != sandGrains);

console.log(
  "c) starsInSky is less than sandGrains OR starsInSky is greater than atoms ==>",
  starsInSky < sandGrains || starsInSky > atoms
);

console.log(
  "d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains ==> ",
  atoms == starsInSky || atoms != sandGrains
);

console.log(
  "e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10 ==>",
  atoms >= 10 && atoms >= 10
);

let mul1 = atoms * starsInSky < 100;
let mul2 = atoms * sandGrains > 100;
console.log(
  "f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100 ==>",
  mul1 || mul2
);
