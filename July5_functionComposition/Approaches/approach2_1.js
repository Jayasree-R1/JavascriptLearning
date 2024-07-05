// Approach 2: Function Composition using Array.reduceRight()
// Intuition
// In the first approach, we used iteration to apply the functions from right to left. Alternatively, we can utilize the Array.reduceRight() method to achieve the same result. The reduceRight() method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value. In this case, our accumulator will be the input value x, and the function will be the composition of the functions in the array.

// Using reduceRight() simplifies the code and provides a more functional programming style solution. The key is to understand how the Array.reduceRight() method works and how it can be applied to this problem.

// Algorithm
// Inside the compose function, return another function that takes an input value x.
// Use the Array.reduceRight() method to iterate over the functions from right to left.
// For each function in the array, apply it to the accumulator (x initially) and update the accumulator with the result.
// After iterating through all the functions, return the final accumulator value as the output of the composed function.
// Implementation

//TypeScript
// type F = (x: number) => number;

// function compose(functions: F[]): F {
//   return (x: number) => functions.reduceRight((acc, f) => f(acc), x);
// }

function compose(functions) {
  return (x) => functions.reduceRight((acc, f) => f(acc), x);
}

// The key here is to understand how Array.reduceRight() works.

// Array.reduceRight() is a built-in JavaScript array method that can be used to apply a function to each element of an array, starting from the rightmost element and moving towards the left. It takes two arguments: a reducer function and an optional initial value for the accumulator.
