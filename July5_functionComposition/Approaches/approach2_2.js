// The reducer function itself has four arguments: the accumulator, the current value, the current index, and the array being processed. The accumulator is a value that is being built up with each iteration, and it is returned at the end of the process. In our case, the accumulator represents the intermediate result of applying the functions in the composition.

// Here's a breakdown of how Array.reduceRight() works in the context of the compose function:

// The compose function receives an array of functions and returns a new function that takes an input value x.
// When the new function is called with an input value x, it calls Array.reduceRight() on the functions array.
// The reducer function is called for each function in the array, starting from the rightmost element and moving towards the left. The accumulator initially holds the input value x.
// In each iteration, the reducer function applies the current function to the accumulator and updates the accumulator with the result.
// Once all the functions have been applied, the final value of the accumulator is returned.
// To illustrate this process, let's consider a simple example:

const functions = [(x) => x * 2, (x) => x + 1];
const composedFn = compose(functions);
const result = composedFn(3); // result should be (3 + 1) * 2 = 8

// The compose function receives an array functions with two functions: x => x * 2 and x => x + 1.
// When composedFn is called with the input value 3, it calls Array.reduceRight() on the functions array.
// The reducer function starts with the rightmost function x => x + 1 and applies it to the accumulator (initially 3). The accumulator becomes 3 + 1 = 4.
// The reducer function then moves to the next function x => x * 2 and applies it to the accumulator (now 4). The accumulator becomes 4 * 2 = 8.
// The final value of the accumulator, 8, is returned as the result of the composed function.
// To sum up, by using Array.reduceRight(), we can easily apply the function composition in a clean and concise manner.

// Complexity Analysis
// Let N be the number of functions in the array.

// Time complexity: O(N). Each of the N functions in the array is called exactly once, assuming that each function has a constant time complexity.
// Space complexity: O(1). The reduceRight method uses an accumulator to store the intermediate results, not requiring any additional space.
