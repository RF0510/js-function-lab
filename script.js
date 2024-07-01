/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(x, y, z){
    if (x >= y && x >= z)
    return x;
    else if (y>=x && y>=z)
    return y;
    else return z;

}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));