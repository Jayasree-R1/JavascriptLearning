// Approach 4: Count promises
// Intuition:
// We can handle the resolution of promise1 and promise2 in parallel and accumulate the results i.e., we can use a counter to keep track of the number of promises resolved, and once all promises are resolved, it resolves the new promise with the accumulated result.

// Algorithm:
// Create two variables, count and res, to keep track of the number of promises resolved and the accumulated result, respectively.
// A forEach loop to iterate over an array containing promise1 and promise2.
// For each promise in the loop, an async function is defined to handle the resolution.
// Inside the async function, the await keyword is used to pause the execution until the promise is resolved.
// If the promise is resolved successfully, the resolved value is stored in subRes. The res variable is then updated by adding subRes to it, and the count variable is decremented by 1.
// After updating the variables, we check if the count variable is equal to 0, indicating that both promises have been resolved. If count is 0, it means all promises are resolved, and the new promise is resolved with the accumulated result (res) using the resolve function.
// If any promise is rejected, an error is caught, and the new promise is immediately rejected by calling the reject function.
// Implementation:
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve, reject) => {
    let count = 2;
    let res = 0;

    [promise1, promise2].forEach(async (promise) => {
      try {
        const subRes = await promise;
        res += subRes;
        count--;

        if (count === 0) {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

// Complexity Analysis:
// Time complexity: O(promise1+promise2)

// Space complexity: O(1)
