// Approach 1: Asynchronous Programming with Promises and setTimeout
// Intuition
// In JavaScript, asynchronous operations are typically handled using promises. A promise represents a value that may not be available yet, but will be resolved at some point in the future (or rejected, in case of an error). To simulate a delay, or "sleep", in JavaScript, we can use the setTimeout function, which schedules a function to be run after a certain amount of time.

// The task requires us to create an asynchronous function that sleeps for a specified amount of milliseconds. To achieve this, we can combine promises with setTimeout. We will return a promise that gets resolved after the specified delay.

// Algorithm
// Define an asynchronous function named sleep(millis). This function is expected to pause execution for millis milliseconds before resolving.
// Inside this function, construct a new promise object. The executor function of this promise object is where we'll incorporate our delay.
// Within the executor function, use the setTimeout method. setTimeout is a method provided by the host environment (web browsers, Node.js, etc.) that executes a provided function or piece of code after a specified delay.
// Set the delay of setTimeout to be millis milliseconds. The code to execute after the delay will be the resolve method of the promise.
// The resolve method, when called, will mark the promise as fulfilled, allowing any attached .then handlers to execute.

async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

// n this implementation, the sleep function is an async function that returns a promise. The executor function of the promise uses setTimeout to resolve the promise after millis milliseconds. Note that we don't actually need to make the sleep function async, since we're returning a promise directly, but it doesn't hurt to mark it as async.

// You can use the sleep function in your code like this:

// let t = Date.now();
// sleep(100).then(() => {
//     console.log(Date.now() - t); // approximately 100
// });
// In this usage, we record the current time, call the sleep function, and then log the elapsed time when the promise resolves. The elapsed time should be approximately equal to the input to sleep, indicating that the function has indeed "slept" for the specified amount of time.

// Note that both returning the promise with return new Promise() or return await new Promise() will give you the same result in an async function, as described in the overview section.

// Also using try {} catch(){} is a common practice in asynchronous programming, as it allows you to handle any potential exceptions that may be thrown. In the solution below, if an error occurs during the execution of the setTimeout function, the promise is rejected with the thrown error:

async function sleep(millis) {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => res(5), millis);
    } catch (err) {
      rej(err);
    }
  });
}

// Complexity Analysis
// Time complexity: O(1). The time complexity of the function is O(1) because the computational effort remains constant regardless of the input. However, the actual time taken for the function to fulfill or complete may vary, as it involves initiating a timer and returning a promise, which is not directly related to the input size but rather the specific task being performed.

// Space complexity: O(1). The function uses a constant amount of space to store the promise and the timer. This does not change with the input value.
