// declare two varibles 🐈IsBetter 🐕 IsBetter
let dogIsBetter = true; 
let catIsBetter = false ;

// check the result of ==> 

// 🐕 dogIsBetter AND 🐈 catIsBetter 
console.log(dogIsBetter && catIsBetter) ; // false

// dogIsBetter OR catIsBetter.
console.log(dogIsBetter || catIsBetter) ; // true

// NOT (dogIsBetter AND catIsBetter)
console.log (!dogIsBetter && !catIsBetter) ; //false 

// ==> ?????????????????? Check the above again

// 2. Declare three more variables "atoms", "sandGrains", "starsInSky". Give these variables number values. ⚛ ⚛ ⚛ ⚛ 
let atoms = 10 ;
let sandGrains = 20 ;
let starsInSky = 5 ; 

//  3 a)
console.log('a) is atoms greater than starsInSky AND atoms is greater than sandGrains? ==> ', atoms > starsInSky && atoms > sandGrains? 'true' : 'false') ; 
// false ==> THE GREATER than operator returs the value true if the left operand is greater than the right value, if not it will give you the value false. ==> since I am here asking for && the end result will be false beacuse atoms is not greater than sandgrains 

// 3 b)
console.log('b) atoms is NOT equal to sandGrains ==> ', atoms !== sandGrains); 
// true ==> three (===) ==> equal with, if I add one (! )infront of the (===) the value will print the opposite, so by printing (!==) it will show me NOT equal instead of EQUAL

// 3 c 
console.log('c) starsInSky is less than sandGrains OR starsInSky is greater than atoms ==> ', starsInSky < sandGrains || starsInSky > atoms) ; 
//true ==> LESS has the same logic as the greater than operator. We get the value true here because of the || (OR) operator (starsInSKy is less than sandGrains but starsInsky is not greater than atoms)

// 3 d
console.log('d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains ==> ', atoms === starsInSky || atoms !== sandGrains) ; 
//true ==> the result here is true beacuse that atoms and sandGrains are NOT equals

// 3 e
console.log('e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10 ==> ', atoms >= 10 && sandGrains <= 10) ; 
// false ==> because we have the operator && must both be true to give the value true othervise the vaule will be false
 
// 3 f
console.log('f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100 ==> ', atoms * starsInSky < 100 || atoms * sandGrains > 100) ; 
// true ==> since we are using || (OR) it enough that one statement is true , which here is the atoms * starsInSky is less than 100

// BONUS ==> done, i hope  I did ok 😄  😄  😄  








