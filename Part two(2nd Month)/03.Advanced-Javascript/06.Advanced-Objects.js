// Objects - Reference Type

[] === [] // false
[1] === [1] // false
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
//----------------------------------
object1 === object2; // true
object1 === object3; // false
object1.value = 15;
object2.value// 15
object3.value// 10



// Context vs Scope: Context tells where we are with the object
window.this // 'this' is what is the object environment that we're in right now (for example : window), the best way to think about it is, what is to the left of the dot

const object4 = {
  a : function() {
    console.log(this);
  },
} // now 'this' is an object4



// Instantiation - is when you make a copy of an object and reuse the code.

/* think of a 'class' as something that I want to make a copy of. If I ever want to make a copy of an 'object', it's a good idea to do something like this, so that well, you'll see how easy it is to copy this now. */

class Player {
  /* Every time I'm making a copy of a 'Player' the first thing that gets run is the 'constructor' function and this 'constructor' function is gonna create these properties on the 'Player' object.
  So 'name' and a 'type'. 
  */
  constructor(name, type) {
    console.log('player :', this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    /* Now I'm saying, this 'Player' class, any player that I create will always be able to introduce himself and they'll also have 'this' 'name' and 'this.type'. And the reason we use 'this' here is that when we create a 'Player' we can access the name and type property. */
  }
}

class Wizard extends Player {
  // Any time we extend something we need to also call the 'constructor' function of the 'Player'. whenever you 'extend' a class, you want to use super to have access to Player properties
  contructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`WEEEE I'am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Warlock');
const wizard3 = new Wizard('Shelly', 'Shaman');

wizard1.play();
wizard1.introduce();