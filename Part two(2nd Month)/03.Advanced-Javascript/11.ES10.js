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



// 
const userEmail1 = '         eddytheeagle@gmail.com';
const userEmail2 = 'dangerousMatt@gmail.com        ';
userEmail1.trimStart();
userEmail2.trimEnd();