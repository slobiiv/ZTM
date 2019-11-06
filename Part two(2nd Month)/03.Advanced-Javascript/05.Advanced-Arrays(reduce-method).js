// Advanced Arrays
const array = [1,3,5,7];


// accumulator is something where we can store the information that happens in the body of the function.
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0); // 0 is a value of accumulator
console.log('reduce: ', reduceArray);
/*  
    when accumulator is : 0 then by iteration of num accumulator becomes:

    accumulator += num; // 1
    accumulator += num; // 4
    accumulator += num; // 9
    accumulator += num; // 16
*/

/* Remember these three methods (map,filter,reduce)because you're going to be using them a lot in your career.
They're very very useful.
They're pure which means every time we do an operation whatever inputs we get in it always returns a value.
And there are no side effects. 
*/