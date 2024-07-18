// Approach 3: Using Promise.then()
// Intuition:
// We can use .then() to chain promises together and perform the addition of their resolved values i.e., first we can resolve promise1 and then promise2.

// Algorithm:
// We use the .then() method on promise1. This allows us to chain the resolution of promise2 after promise1 is fulfilled.
// Within the .then() method's callback, the resolved value of promise1 is represented as val. We will use another .then() method on promise2 to access its resolved value, represented as val2.
// Inside the second .then() callback, the values of val and val2 are added together using the + operator. We can also use .catch() for error handling if any of the promises are rejected.
// Finally, we return the result of the addition, which is implicitly wrapped in a promise due to the use of the async keyword.
// Implementation:

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  try {
    return promise1.then((val) => promise2.then((val2) => val + val2));
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to maintain the behavior of propagating the error to the caller
  }
};

// Complexity Analysis:
// Time complexity: O(max(promise1,promise2))

// Space complexity: O(1)
