// Primitive types are passed by value
/* 
Pass by value simply means we copy the value and we create that value somewhere else in
memory. 
*/
let a = 5;
b = a;
b++;


// Pass by reference
let obj1 = {name: 'Yao', password: 98765};
let obj2 = obj1
obj2.password = 'easypeasy';
console.log(obj1);
console.log(obj2);

// example with Array
var c = [1,2,3,4];
var d = c;
d.push(989);
console.log('c:', c , 'd: ', d);

// cloned an array.
var e = [1,2,3,4];
var f = [].concat(e);
f.push(669);
console.log('e: ', e, 'f: ',f);



// I want to have this piece of code. This object in a different location in memory. How can we do that. 
let obj = {a: 'a', b: 'b', c: 'c'};
//first parameter {} is the object to copy to which is an empty object.
//second parameter is the source object from which to copy properties
let clone = Object.assign({},obj);
let clone2 = {...obj}; // same as Object.assign({},obj);
obj.c = 5;

console.log(clone); // a: 'a', b: 'b', c: 'c'. Clone object is not affected
console.log(obj); // a: 'a', b: 'b', c: '5'


let obj22 = {a: 'a', b: 'b', c:{deep: 'try and copy me'}};
// How can we clone deep (JSON)
let superClone = JSON.parse(JSON.stringify(obj22));
/* 
We're going to stringify -  that is turn everything in here into a string and then once we turn everything into a string we're going to pass it and turn that string back into an object so that if I do superClone now There you go.
Super clone version did a deep clone of the object very very cool.
*/
console.log(superClone);