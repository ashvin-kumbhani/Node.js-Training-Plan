/* 
You are tasked with creating a set of utility functions for managing an array of numbers. Implement the following functions using both function expressions and arrow functions:

Write a function expression filterEvens that takes an array of numbers and returns a new array containing only the even numbers.

Write an arrow function doubleNumbers that takes an array of numbers and returns a new array where each number is doubled.

Write a function expression sumArray that takes an array of numbers and returns the sum of all the numbers.

Write an arrow function findMax that takes an array of numbers and returns the maximum value.

Write a function expression removeDuplicates that takes an array of numbers and returns a new array with duplicate numbers removed.

*/

// Solution
// Function expression to filter even numbers
const filterEvens = function (numbers) {
    return numbers.filter((num) => num % 2 === 0);
  };
  
  // Arrow function to double numbers
  const doubleNumbers = (numbers) => numbers.map((num) => num * 2);
  
  // Function expression to sum an array
  const sumArray = function (numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  };
  
  // Arrow function to find the maximum value
  const findMax = (numbers) => Math.max(...numbers);
  
  // Function expression to remove duplicates
  const removeDuplicates = function (numbers) {
    return [...new Set(numbers)];
  };
  
  // Example usage
  const numbersArray = [3, 8, 2, 6, 8, 5, 2, 9, 1, 3];
  console.log("Filtered Evens:", filterEvens(numbersArray));
  console.log("Doubled Numbers:", doubleNumbers(numbersArray));
  console.log("Sum of Array:", sumArray(numbersArray));
  console.log("Maximum Value:", findMax(numbersArray));
  console.log("Unique Numbers:", removeDuplicates(numbersArray));
  
