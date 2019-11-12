const basket = ['Apples','Grapes','Watermelons'];

// 1 instance 'for loop'
for(var i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

// 2nd instance 'forEach loop'
basket.forEach(item => {
  console.log(item);
})

// 3rd instance 'for of ' loop
// What we do is iterating(able to go one by one through arrays(or strings) and see every each item)
// (*REMEMBER THE WORD 'ITERATING')
for (item of basket) {
  console.log(item);
}
/* for (item of 'basket') {
  console.log(item); // It will display every each letter one by one
} */

// 4th instance 'for in' loop works with Objects
// What we do wth 'for in' loop is *ENUMARATING - because properties of an object are enumerable ,and an object in javascript is ENUMARABLE if it ALLOWS us to SEE the PROPERTIES.
const detailedBasket = {
  apples : 5,
  oranges: 10,
  grapes: 1000
}
for (item in detailedBasket) {
  console.log(item); // for in allows us to loop over to see Object Properties: apples, oranges, grapes
}
// How it effects on array
for(item in basket) {
  console.log(item); // it will display the indexes of the array item values
}
// Arrays in an object under the hood. Imagine basket as an object -  {0: apple, 1: grapes, 2: Watermelons}