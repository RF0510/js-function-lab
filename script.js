/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
    const vowels = "aeiou";
if (vowels.includes (char)) // used ChatGPT here
{ return true; }
else
{ return false; }
}
console.log('Exercise 3 Result:', isCharAVowel("w"));



