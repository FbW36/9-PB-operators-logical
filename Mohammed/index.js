
// 0.
let dogIsBetter = true;
let catIsBetter = false;


// 1. a.
console.log("dogIsBetter AND catIsBetter ==>", dogIsBetter && catIsBetter );

// 1. b.
console.log("dogIsBetter AND catIsBetter ==>", dogIsBetter || catIsBetter );

// 1. c.
console.log("dogIsBetter AND catIsBetter ==>", !(dogIsBetter && catIsBetter ));

/* ====================================================== */

// 2.
let atoms = 3;
let sandGrains = 5;
let starsInSky = 10;

/* ============================================================= */

// 3. a.
let result = (atoms > starsInSky) && (atoms > starsInSky);
console.log(result);

// 3. b.
result = atoms != sandGrains;
console.log(result);

// 3. c.
result = (starsInSky < sandGrains) || (starsInSky > atoms);
console.log(result);

// 3. d.
result = (atoms == starsInSky) || (atoms != sandGrains);
console.log(result);

// 3. e.
result = (atoms >= 10) && (sandGrains <= 10);
console.log(result);

// 3. f.
result = (atoms * starsInSky) < 100 || (atoms * sandGrains) > 100;
console.log(result);

/* =========================================================== */

