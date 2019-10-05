/* Objects are collections of property */
var user = {
  name: 'John',
  age: 34,
  hobby: 'Soccer',
  isMarried: false
}
console.log(user.name); // 'John'

/* How can we add (change) properties to an object? */
user.favoriteFood = 'spinach';
user.isMarried = true;

/* Why isn't 'array' a javascript type but 'object' is?  
  Array is good for maybe containing a shopping list or a To Do List,
  but an Object might be really good at containing user information.

* If you think of a game - let's say you're building a game where you're controlling this wizard.
Well this wizard - how tall the wizard is, how powerful it is, how many experience points it has.
Well that would be really really good to put in an object because that wizard is an object.
We need properties and values but maybe the spells that could be a list because we can just have a string
of all the spells that the wizard would know.*
*/
user.spells = ['abracadabra', 'Sha-zam','Boo'];
user.spells[0]; // abracadabra

user.shout = function() {console.log('AAAAAAAAH')};
user.shout(); // AAAAAAAAH (this is a METHOD - Remember, Function inside the Object is a Method)

/* Can I have an Object(user) inside of an array? */
var listOfUsers = [
  {name:'Kevin' , password:'12345692',},
  {name:'Teresa' , password:'big-girls-dont-cry',},
  {name: 'Robert', password:'king-Arthas',}
];
listOfUsers[1].name; // Teresa