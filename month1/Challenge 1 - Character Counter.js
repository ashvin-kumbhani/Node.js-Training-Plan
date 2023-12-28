/* 
Write a JavaScript program that takes a string input from the user and counts 
the number of occurrences of each character. Display the results in the console.
*/

// Solution
const userInput = prompt("Enter a string:");
const charCount = {};

for (const char of userInput) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log("Character Count:", charCount);
