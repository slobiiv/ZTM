// Advanced Arrays
const array = [1,3,6,7];

// filter use conditions
const filterArray = array.filter(num => { // return all numbers greater than 5
  return num > 5;
});
console.log('filterArray: ', filterArray); // 6, 7