/*  
Write an arrow function named filterAndSum that takes an array of numbers as input.
The function should filter out even numbers and return the sum of the remaining odd numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterAndSum(numbers);
console.log(result); // Expected Output: 25 (1 + 3 + 5 + 7 + 9)
*/

// Solution
const filterAndSum = (numbers) => {
    return numbers
      .filter((number) => number % 2 !== 0) // Filter out even numbers
      .reduce((sum, number) => sum + number, 0); // Sum the remaining odd numbers
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = filterAndSum(numbers);
  console.log(result); // Expected Output: 25 (1 + 3 + 5 + 7 + 9)
  