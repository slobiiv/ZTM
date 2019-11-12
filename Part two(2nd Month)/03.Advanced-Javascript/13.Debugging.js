// How to approach a function to debugg on Andrei's way.
let flattened = [[0,1],[2,3],[4,5]].reduce((a,b) => a.concat(b), []);
// 1st thing I would do is just read it.
// this code wants to do something called 'flattened'.
// a is accumulator. b is array so:
flattened = [[0,1],[2,3],[4,5]].reduce((accumulator,array) => accumulator.concat(array), []);
// accumulator is an empty array
// next step is to use console.log 
flattened = [[0,1],[2,3],[4,5]].reduce((accumulator,array) => {
  console.log('array', array);
  console.log('accumulator', accumulator);
  return accumulator.concat(array)
}, []);

// Using debugger
flattened = [[0,1],[2,3],[4,5]].reduce((accumulator,array) => {
  debugger;
  return accumulator.concat(array)
}, []);