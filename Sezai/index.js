// or ==> || good dude  - if || find first true case, it will take it otherwise it will continue to the end

//and ==> && bad dude  - if && find first false case, it will take it otherwise it will continue to the end


// 0.

let dogIsBetter = true;
let catIsBetter = false;
console.log(dogIsBetter, catIsBetter);

// 1.
// a)
console.log("dog AND cat ==>", dogIsBetter && catIsBetter);
//FALSE -> no false case in the && operation 

// b)
console.log("dog OR cat ==>", dogIsBetter || catIsBetter);
//TRUE -> find first true case

// c)
console.log("NOT dog AND cat ==>", !(dogIsBetter && catIsBetter));
//TRUE -> because of the "!" it is returned from false to true


// 2.
let atoms = 1;
let sandGrains = 10;
let starsInSky = 100;
console.log(atoms, sandGrains, starsInSky);


// 3.
// a)
console.log("atoms > starsInSky AND atoms > sandGrains ==>", atoms > starsInSky && atoms > sandGrains);
//FALSE -> atoms is 1 and not bigger than the other 2, so false

// b)
console.log("atoms NOT equal sandGrains ==>", atoms != sandGrains);
//TRUE -> 1 is not 10 so NOT EQUAL the math is true

// c)
console.log("starsInSky < sandGrains OR starsInSky > atoms ==>", starsInSky < sandGrains || starsInSky > atoms);
// TRUE -> satrsInSky (100) is greater than atoms (1) so true

// d)
console.log("atoms equal starsInSky OR atoms NOT equal sandGrains ==>", atoms = starsInSky || atoms != sandGrains);
// 100 -> No Idea :/

// e)
console.log("atoms greater that or equal 10 AND sandgrains is less than or equal 10 ==>", atoms >= 10 && sandGrains <= 10);
// TRUE -> atoms is false case and sandGrains are 10, so it is true

// f)
console.log("atoms multiplied starsInSky is less than 100 OR atoms multiplied sandGrains is greater than 100", atoms * starsInSky < 100 || atoms * sandGrains > 100);
// TRUE -> 1*100 < 100 (false) OR 1*10>100 (false)