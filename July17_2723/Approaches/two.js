// Approach 2: Using Only Await
// Intuition:
// The addTwoPromises function is defined as an async function, allowing us to use await inside it. The intuition behind this approach is to await the resolutions of promise1 and promise2 and then calculate the sum of their resolved values i.e., we can directly use await on the promises and return the sum.

// Note: Use of await directly on promise1 and promise2 is not as concurrent as using Promise.all(). As awaiting promises one after the other will result in a longer total time for resolution compared to awaiting them concurrently with Promise.all().

// Algorithm:
// The function addTwoPromises is defined as an asynchronous function using the async keyword. This allows us to use await within the function to pause the execution until promises are resolved.
// Inside the function, the await keyword is used directly on promise1 and promise2. This pauses the execution of the function until the promises are resolved and the values are available.
// Once the promises are resolved, we get their respective resolved values. Then the await keyword allows us to retrieve the resolved value of the promises.
// Now the resolved values of promise1 and promise2 are added together using the + operator.
// Finally, we can return a new promise that will be resolved with the sum of the resolved values of promise1 and promise2.
// Implementation:

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  try {
    return (await promise1) + (await promise2);
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to maintain the behavior of propagating the error to the caller
  }
};

// Complexity Analysis:
// Time complexity: O(max(promise1,promise2))

// Space complexity: O(1)
