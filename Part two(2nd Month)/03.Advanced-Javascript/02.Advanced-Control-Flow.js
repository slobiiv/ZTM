// condition ? expr1 : expr2 - is this true provide expr1 else  provide expr2
function isUserValid(bool) {
  return bool;
}
var answer = isUserValid(true) ? 'You may enter' : 'Access denied'; // You may enter

yourAutomatedAnswer = 'Your account # is ' + (isUserValid(false) ? '1234' : 'not available' ); 

/* SWITCH */
function moveCommand(direction) {
  var whatHappens;
  switch(direction) { // check what the condition(variable) is
    case 'forward': //if direction = 'forward'
      whatHappens = 'You encounter a monster'; // return this statement
      break; //  break takes you out of the condition if this particular statement is true. Otherwise it continues...
    case 'back':
      whatHappens = 'You arrived home';
      break;
    case 'right':
      whatHappens = 'You found a river';
      break;
    case 'left':
      whatHappens = 'You run into a troll';
      break;
    default: // else return this statement
      whatHappens = 'please enter a valid direction';
  }
  return whatHappens;
}