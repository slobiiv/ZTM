// How does the program remember things? To catch and hold values, JavaScript uses variables Variables can hold any JavaScript types
var firstName = 'Slobodan';
var lastName = 'Vlaic';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Prompt stores the value, assign it to a variable so it will be accessible
prompt('What is your username?');

// Calculator using prompt(), but prompt turns the value in string. Turn string into number with Number(prompt('2'));
var first = prompt('enter first number');
var second = prompt('enter second number');
var sum = Number(first) + Number(second);
alert('The sum is ' + sum);


var y; // undefined value - means nothing is assigned to a variable