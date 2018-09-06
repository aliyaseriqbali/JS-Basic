/**************************************************************************************
* Variable and data types
*/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job)

// Variable naming rules
// var _3year = 3;
// var johnMark = 'John and Mark'
// var if= 23;


/**************************************************************************************
* Variable mutation and type coerction
*/

var firstName = 'John';
var age = 28;
// Type coerction
console.log(firstName + ' ' + age)

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);


var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);








