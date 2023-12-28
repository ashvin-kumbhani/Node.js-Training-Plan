/* 
Create a set of functions that represent asynchronous tasks. Refactor the code to use Promises and async/await for a more organized and readable structure.

Asynchronous Task Processing:

Create a function performTaskAsync that simulates an asynchronous task. This function should return a Promise that resolves after a simulated delay.
Create a function processDataAsync that simulates processing data from the completed tasks. This function should also return a Promise.
Callback Hell Scenario:

Simulate a scenario where you need to perform three asynchronous tasks (task1, task2, task3) and process their results sequentially.
Log the results to the console.
Refactoring with Promises and async/await:

Refactor the code to use Promises and async/await for a more organized and readable structure.

// Simulated asynchronous task processing without fs module

// Simulated asynchronous task
function performTaskAsync(taskName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = `Result of ${taskName}`;
      console.log(`Completed ${taskName}`);
      resolve(result);
    }, Math.random() * 2000); // Simulated delay
  });
}

// Simulated asynchronous data processing
function processDataAsync(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedResult = `Processed data: ${data}`;
      console.log(processedResult);
      resolve(processedResult);
    }, 1000); // Simulated delay
  });
}

// Callback Hell Scenario
performTaskAsync('task1')
  .then((result1) => {
    processDataAsync(result1)
      .then((processedResult1) => {
        console.log(processedResult1);

        performTaskAsync('task2')
          .then((result2) => {
            processDataAsync(result2)
              .then((processedResult2) => {
                console.log(processedResult2);

                performTaskAsync('task3')
                  .then((result3) => {
                    processDataAsync(result3)
                      .then((processedResult3) => {
                        console.log(processedResult3);
                      });
                  });
              });
          });
      });
  });

// Run the refactored code with async/await
processTasks();
*/

// Solution

// Simulated asynchronous task
function performTaskAsync(taskName) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `Result of ${taskName}`;
        console.log(`Completed ${taskName}`);
        resolve(result);
      }, Math.random() * 2000); // Simulated delay
    });
  }
  
  // Simulated asynchronous data processing
  function processDataAsync(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedResult = `Processed data: ${data}`;
        console.log(processedResult);
        resolve(processedResult);
      }, 1000); // Simulated delay
    });
  }
// Refactoring with Promises and async/await
async function processTasks() {
    try {
      const result1 = await performTaskAsync('task1');
      const processedResult1 = await processDataAsync(result1);
      console.log(processedResult1);
  
      const result2 = await performTaskAsync('task2');
      const processedResult2 = await processDataAsync(result2);
      console.log(processedResult2);
  
      const result3 = await performTaskAsync('task3');
      const processedResult3 = await processDataAsync(result3);
      console.log(processedResult3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Run the refactored code with async/await
  processTasks();