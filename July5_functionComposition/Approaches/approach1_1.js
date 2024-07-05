// Intuition
// Function composition is a concept where we apply a series of functions to an input value in a specified order. In this problem, we're asked to compose functions given in an array and create a new function that represents their composition. The order of applying these functions is from right to left, and when the array of functions is empty, we should return the identity function, which returns the input unchanged.

// In order to solve this problem, we can iterate over the array of functions backwards and successively apply each function to the input value. We'll start with the input value x and apply the last function in the array to it. We'll then use the result as the input for the previous function and continue the process until we reach the first function in the array. After applying all the functions, we'll return the final result.

// Algorithm
// Inside the compose function, return another function that takes an input value x.
// Check if the length of the array of functions is zero; if so, return the identity function (i.e., return x).
// Initialize a variable input with the value of x.
// Iterate over the array of functions from the last index to the first index.
// For each function in the array, apply it to the input value and update the input with the result.
// After iterating through all the functions, return the final input value as the output of the composed function.
// Implementation
// Here is an implementation using a regular for loop:

var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let input = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      const currFunc = functions[i];

      input = currFunc(input);
    }

    return input;
  };
};
