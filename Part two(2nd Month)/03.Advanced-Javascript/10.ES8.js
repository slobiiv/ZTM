//  ES8 has a few more new features ...

// String Padding
/* ".padStart()"  and  "".padEnd()"" -  this is useful just for aligning characters of strings. If you want specific padding*/
'Turtle'.padStart(10); // "    Turtle"; I get a length value of 10 including space and String starting from the beginning
'Turtle'.padEnd(10); // "Turtle    "; I get a length value of 10 including space and String starting from the end of the String



// Trailing commas - t's just syntactic and just make things look a little bit nicer.
const fun = ( // adding parameters
            a,
            b,
            c,
            d,
) => {console.log(a);}



// Handling Objects similar to Arrays
/*  
    Object.values; Object.entries; Object.keys 
*/
let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username3: 'Mr.Grinch'
}
// NOW
Object.values(obj).forEach(value => {console.log(value)}); // Santa, Rudolf, Mr.Grinch

Object.entries(obj).forEach(value => {console.log(value)}); // Array [ "username0", "Santa" ]; Array [ "username1", "Rudolf" ]; Array [ "username3", "Mr.Grinch" ] 
// And you can do whatever you want with it and use forEach, map, reduce, filter all those array functions.
Object.entries(obj).map(value => {
  //value[1] will grab the names, [1] because names ar esecond item in the array, and value[0] grabs the index
  return value[1] + value[0].replace('username', ''); // Santa0, Rudolf1,Mr.Grinch2
})





// BEFORE WE DID THIS WAY
// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key]);
// });
