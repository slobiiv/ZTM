/* Array is a Data Structure. Data structures are like compartment holders in your desk, */
var list = ['tiger', 'cat', 'bear', 'bird']; // How do we grab one of these four items?
console.log(list[1]); // cat - because Javascript counts from 0

/* 
Now what kind of things can arrays hold?:
- strings, numbers, booleans, *functions
*/
var mixedList = ['apples',3,undefined, true, function apple() {console.log('I like apples!');}];

/* Array within Array */
var arrayList = [['one','two'],['three','four']];
arrayList[1]; // ['three','four'] - length 2
arrayList[1][0]; // 'three'

/*  Arrays are cool because JavaScript has predefined methods(think of it as functions) for them. */
// Let's use this array: 
var list = ['tiger', 'cat', 'bear', 'bird'];

list.shift(); // It returns 'tiger' and removes it(the first value); Array(3) [ "cat", "bear", "bird" ]
list.pop(); // It returns 'bird' and removes it(the last value); Array [ "cat", "bear" ]
list.unshift('boar'); // Inserts new elements at the start of an array; Array(4) [ "boar", "cat", "bear"]
list.push('elephant'); // Inserts new elements at the end of an array; Array(3) [ "boar","cat", "bear", "elephant" ]

list.concat(['bee','deer']); // The concat() method is used to join two or more arrays; Array(6) [ "boar", "cat", "bear", "elephant", "bee", "deer" ]

/* By the way, numbers before values are called INDEX  */

list.sort(); // [ "bear", "boar", "cat", "elephant" ]; It sorted only the original Array. The one that we concatenated, we didn't assign it to a variable. What we can do is to assign two of the Arrays to a single variable.
var myNewList = list.concat(['bee','deer']);
myNewList.sort(); // Array(6) [ "bear", "bee", "boar", "cat", "deer", "elephant" ]