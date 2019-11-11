// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
const array1 = [1,[2,3],[4, 5]]; 
array1.flat(1); // [1,2,3,4,5]
const array2 = [1,[2,3,[4, 5]]];
array2.flat(1); // [1,2,3,[4,5]] 
array2.flat(2); // [1,2,3,4,5] 

//  How can you completely flan this array ?
const array3 = [1,[2,3,[4, 5]],[[[['<3']]]]];
array3.flat(10); // [ 1, 2, 3, 4, 5, "<3" ]

// flat() is helpful for cleaning up the array of entries for example:
const entries = ['bob','dylan','derek',,,,,,,'john'];
entries.flat(); // [ "bob", "dylan", "derek", "john" ]



// flatMap() - The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient
/* for each item we're going to get a 'name' and this 'name' is using arrow functions is going to get 'name' plus '<3'. */
const addHeartNextToNames = entries.flatMap(name => name + '<3'); // [ "bob<3", "dylan<3", "derek<3", "john<3" ]



// trimStart() and trimEnd()
const userEmail1 = '         eddytheeagle@gmail.com';
const userEmail2 = 'dangerousMatt@gmail.com        ';
userEmail1.trimStart();
userEmail2.trimEnd();



// The Object.fromEntries() -  method transforms a list of KEY-VALUE pairs into an object.
const userProfiles = [['commanderTom',23],['derekZlander', 40],['hansel', 18]];
Object.fromEntries(userProfiles); // Object { commanderTom: 23, derekZlander: 40, hansel: 18 }

// Doing Opposite
const obj1 = {commanderTom: 23, derekZlander: 40, hansel: 18 };
Object.entries(obj1); // 0: Array [ "commanderTom", 23 ] 1: Array [ "derekZlander", 40 ] 2: Array [ "hansel", 18 ]



// try{} catch{} -  try and cache block in JavaScript allow us to try a piece of code and if there's any errors to catch them.
try{
  bob + true;
} catch {
  console.log('You have messed up');
}
/* It's the exact same thing as us writing 4 + 5.
The only difference is that within this try block we're telling javascript Hey try this and if there's any errors on line 45then do something within the catch block. */
// When i shows error it catches and displays the console.log message in this case