/**************************************************************************************
* Variable and data types
*/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job)

// // Variable naming rules
// var _3year = 3;
// var johnMark = 'John and Mark'
// var if= 23;


/**************************************************************************************
* Variable mutation and type coerction
*/

// var firstName = 'John';
// var age = 28;
// // Type coerction
// console.log(firstName + ' ' + age)

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);


// // Variable mutation
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);


// var lastName = prompt('what is his last name?');
// console.log(firstName + ' ' + lastName);


/**************************************************************************************
* Basic operators
*/

// var now, yearJohn, yearMark;
// now = '20';
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - 28;
// yearMark = now - 33;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // Logical operator
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);


// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);


/**************************************************************************************
* Operator precedence
*/

// var now = 20;
// var yearJohn = 1989;
// var fullAge = ;

// // Multiple operator
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // grouping operator
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y)

// // More operator
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++; // adds one unit to the varible
// console.log(x);


/**************************************************************************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var heightJohn, heightMark, massJohn, massMark, markBMI, johanBMI;

// heightJohn = 1.90;
// massJohn = 85;

// heightMark = 1.75;
// massMark = 70;

// johanBMI = massJohn / (heightJohn * heightJohn)
// markBMI = massMark / (heightMark * heightMark)
// console.log('John: ' + johanBMI, 'Mark: ' + markBMI);
// var isMarkBmiHigher = markBMI > johanBMI
// console.log('Is Mark\'s BMI higher than John\'?' + ' ' + isMarkBmiHigher);


/**************************************************************************************
* IF / ELSE statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is single');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is single');
// }

// var heightJohn, heightMark, massJohn, massMark, markBMI, johanBMI;

// heightJohn = 1.90;
// massJohn = 85;

// heightMark = 1.75;
// massMark = 70;

// johanBMI = massJohn / (heightJohn * heightJohn)
// markBMI = massMark / (heightMark * heightMark)
// console.log('John: ' + johanBMI, 'Mark: ' + markBMI);

// if(markBMI > johanBMI) {
//     console.log('Mark\'s BMI is than John\'s');
// } else{
//     console.log('John\'s BMI is than Mark\'s');
// }


/**************************************************************************************
* Boolean logic
*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.')
// } else if (age >= 13 && age < 20) { //between 13 and 20
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man.');
// }


/**************************************************************************************
* The Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 16;

// // Ternery operator
// age >=  ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.');

// var drink = age >=  ? 'beer' : 'juice';
// console.log(drink);

// // if (age >= ) {
// //     var drink = 'beer'
// // } else {
// //     var drink = 'juice'
// // }

// // Switch statement
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// age = ;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


/**************************************************************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;
// height = 23;
// if (height || height === 0) {
//     console.log('Varible is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operator
// if (height == '23') {
//     console.log('The == operator does type coerction!');
// }


/**************************************************************************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
 If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnTeamScore = (89 + 120 + 103) / 3;
var mikeTeamScore = (116 + 94 + 123) / 3;
var maryTeamScore = (97 + 134 + 105) / 3;
console.log('John: ' + johnTeamScore, 'Mike: ' + mikeTeamScore, 'Mary: ' + maryTeamScore)

if (johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore) {
    console.log('John\'s team is the winner with ' + johnTeamScore + ' average points');
} else if (mikeTeamScore > johnTeamScore && mikeTeamScore > maryTeamScore) {
    console.log('Mike\'s team is the winner with ' + mikeTeamScore + ' average points');
} else if (maryTeamScore > johnTeamScore && maryTeamScore > mikeTeamScore) {
    console.log('Mary\'s team is the winner with ' + maryTeamScore + ' average points');
} else {
    console.log('It\'s a draw.')
}

