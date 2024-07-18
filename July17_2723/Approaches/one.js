// Approach 1: Using Promise.all
// Intuition:
// We can use Promise.all() to create a new promise that resolves when both promise1 and promise2 are resolved.

// Algorithm:
// Inside the function, we use Promise.all() to create a new promise that resolves when both promise1 and promise2 are resolved. Promise.all() takes an array containing the promises as its argument.
// With Promise.all() we will use await keyword to pause the execution of the function until the promise returned by Promise.all() is resolved. It waits for both promise1 and promise2 to fulfill.
// Once the promise returned by Promise.all() is fulfilled, the resolved values of promise1 and promise2 are available in an array. Using destructuring assignment, the values are assigned to res1 and res2 variables, respectively.
// Finally, we return the sum of res1 and res2. Also we can put this entire logic in try{} catch{} block.
// Implementation:

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  try {
    const [res1, res2] = await Promise.all([promise1, promise2]);
    return res1 + res2;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to maintain the behavior of propagating the error to the caller
  }
};

// Complexity Analysis:
// The time complexity is determined based on the time of the promise that takes more time to resolve. That's because we have to wait for both of the promises to be fulfilled before returning the answer. Also, we don't need any extra space aside from the results, which should be returned and isn't counted in space complexity.

// Time complexity: O(max(promise1,promise2))

// Space complexity: O(1)
