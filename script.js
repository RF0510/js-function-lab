//const maxOfThree = function (x, y, z){
//if (x >= y && x >= z)
//{ return x; }
//else if (y >= x && y >= z)
// { return y; }
//else 
//{ return z; }
//}
//console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function percentage (x) {
{ return x * 100; }
} 
const tipPercentage = percentage(2);


const calculateTip = (x, y) => {
{ return x * y; }
}
console.log('Exercise 7 Result:', calculateTip(20, 2));

/*Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.
*/