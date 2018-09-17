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

// var johnTeamScore = (89 + 120 + 103) / 3;
// var mikeTeamScore = (116 + 94 + 123) / 3;
// var maryTeamScore = (97 + 134 + 105) / 3;
// console.log('John: ' + johnTeamScore, 'Mike: ' + mikeTeamScore, 'Mary: ' + maryTeamScore)

// if (johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore) {
//     console.log('John\'s team is the winner with ' + johnTeamScore + ' average points');
// } else if (mikeTeamScore > johnTeamScore && mikeTeamScore > maryTeamScore) {
//     console.log('Mike\'s team is the winner with ' + mikeTeamScore + ' average points');
// } else if (maryTeamScore > johnTeamScore && maryTeamScore > mikeTeamScore) {
//     console.log('Mary\'s team is the winner with ' + maryTeamScore + ' average points');
// } else {
//     console.log('It\'s a draw.')
// }


/**************************************************************************************
* Functions
*/

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' has already retired')
//     }
// }

// yearsUntilRetirement(1990, 'John')
// yearsUntilRetirement(1948, 'Mike')
// yearsUntilRetirement(1969, 'Jane')


/**************************************************************************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kid how to code';
//         case 'driver':
//             return firstName + ' drives uber in Lisbon';
//         case 'designer':
//             return firstName + ' designes beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John')); 
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));


/**************************************************************************************
* Array
*/

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben'
// names[names.length] = 'Mary';
// console.log(names)

// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.')

// console.log(john)

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is designer';
// console.log(isDesigner)



/**************************************************************************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// function countTip(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .20;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .10;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [
//     countTip(bills[0]),
//     countTip(bills[1]),
//     countTip(bills[2])
// ];

// var billsPlusTips = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ]
// console.log(tips, billsPlusTips);


/**************************************************************************************
* Object and Properties
*/

// // Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// }
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // New Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


/**************************************************************************************
* Object and methods
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john)


/**************************************************************************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var john = {
//     fullName: 'John Smith',
//     height: 1.80,
//     mass: 83,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI
//     }
// }

// var mark = {
//     fullName: 'Mark Miller',
//     height: 1.75,
//     mass: 70,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI
//     }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark)

// if (john.BMI > mark.BMI) {
//     console.log(john.fullName + ' has the highest BMI of ' + john.BMI)
// } else if (mark.BMI > john.BMI) {
//     console.log(mark.fullName + ' has the highest BMI of ' + mark.BMI)
// } else {
//     console.log('Its a draw')
// }


/**************************************************************************************
* Loops and iteration
*/

// for (var i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// // i = 0, 0 < 10 true, log i to console, i++
// // i = 1, 1 < 10 true, log i to the console, i++
// //...
// // i = 9, 9 < 10 true, log i to the console, i++
// // i = 10, 10 < 10 FALSE, exit the loop!

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// // For loop
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // While loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// // continue statement 
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// // break statement
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }
// // Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }


/**************************************************************************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
    family: 'John\'s family',
    bill: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips = [];
        this.paidAmount = [];

        for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            if (this.bill[i] < 50) {
                percentage = .20;
            } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
                percentage = .15;
            } else {
                percentage = .10;
            }
            this.tips[i] = this.bill[i] * percentage;
            this.paidAmount[i] = this.tips[i] + this.bill[i];
        }
    }
}

var mark = {
    family: 'Mark\'s family',
    bill: [77, 375, 110, 45],
    calcTip: function () {
        this.tips = [];
        this.paidAmount = [];

        for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            if (this.bill[i] < 100) {
                percentage = .20;
            } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }
            this.tips[i] = this.bill[i] * percentage;
            this.paidAmount[i] = this.tips[i] + this.bill[i];
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTip();
mark.calcTip();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.family + ' tips more with an average of ' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.family + ' tips more with an average of ' + mark.average);
} else {
    console.log('the paid equal tips')
}









