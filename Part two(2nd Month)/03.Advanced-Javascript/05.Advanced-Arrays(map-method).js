// Advanced Arrays
const array = [1,3,5,7];

const double = []; // wee need a place where to store the multiplied value
const newArray = array.forEach((num) => {
  double.push(num * 2); // being pushed inside double array
})
console.log('forEach: ', double);  //forEach : double = [2,6,10,14] 


// When you think of LOOP
// MAP, FILTER, REDUCE (most important methods in day to day JavaScript)
/* 
const mapArray = array.map((num) => {
  return num * 2; // you always need to return with map
});
console.log('map :', mapArray); // map : Array(4) [ 2, 4, 8, 10 ] 
 */

// CLEANER VERSION WITH ONE PARAMETER
const mapArray = array.map(num => num * 2); // you always need to return with map
console.log('map :', mapArray); // map : Array(4) [ 2, 4, 8, 10 ]
/* 
So let's say over here the first num is number one in array.
We return 1 * 2 that gets put into map array which is now 2.
And then we go to the next number to 3 * 2.
Now gets added to the array 5 * 2 gets added to the array and 7 * 2 gets added to the array.
So that's why we return it. 
*/ // MAP transforms the array. It creates a new array. Not changing the existing
