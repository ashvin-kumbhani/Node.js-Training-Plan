/* 
Create a function that accepts two promises as arguments and returns a new promise 
that resolves to the value of the promise that resolves first. 
If both promises resolve at the same time, return an array containing both values.
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

function raceToFinish(promise1, promise2) {
    return Promise.race([promise1, promise2]);
}

raceToFinish(promise1, promise2).then((result) => console.log(result));
// console.log("🚀 Result -> ", await raceToFinish(promise1, promise2));
