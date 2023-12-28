/* 
Write a function that executes three promises sequentially, waiting for each promise to resolve before starting the next one. 
Print a message to the console after each promise resolves, indicating its completion.
*/

// Solution
const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("First");
    }, 1400);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Second");
    }, 1500);
});

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Third");
    }, 1800);
});


function sequentialPromises(promise1, promise2, promise3) {
    return promise1
        .then(() => {
            console.log("Promise 1 resolved");
            return promise2;
        })
        .then(() => {
            console.log("Promise 2 resolved");
            return promise3;
        })
        .then(() => {
            console.log("Promise 3 resolved");
        });
}
sequentialPromises(promise1, promise2, promise3);