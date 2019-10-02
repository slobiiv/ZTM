/* CONDITIONS */
var name = 'Slobodan';

if(name === 'Billy') {
  alert('Hi Billy!');
} else {
  alert('I don\'t know you');
}

/* MULTIPLE CONDITIONS */
var age = 28;

if(age < 18) {
  alert('You can not enter the casino!');
} else if(age > 18) {
  alert('Welcome Mr Bond!');
} else {
  alert('May I ask for your ID!?');
}

/* LOGICAL OPERATORS */
/* && AND */
if (age > 0 && age < 18) { // Both of the conditions must be true for execution
  alert('You can not drink alcohol, and you can not drive a car yet!')
} else if (age >= 18 && age < 70) {
  alert('If you are going to drink, please , do not drive!');
}

/* || OR */
var firstName = 'Slobodan';

if(firstName === 'Slobodan' || firstName === 'Sanela') { // One of the conditions must be true for execution
  alert('Welcome ' + firstName);
}

/* ! NOT */
if(!(firstName === 'Slobodan')) { // firstName is not Slobodan
  alert('It is not Slobodan...');
} else {
  alert('It is Slobodan!');
} 