// Approach 2: Using rest parameter
// We can use the rest parameter syntax (...args) to gather all the arguments into an array called args.
// The args.length expression is used to access the length property of the args array, which represents the number of arguments passed to the function.

// Implementation:

var argumentsLength = function (...args) {
  return args.length;
};

// Complexity Analysis:
// Time complexity: O(1)

// Space complexity: O(1)

// The main difference between the above two code snippets lies in how they access the length of the arguments:

// The first code snippet (arguments.length) accesses the length property on the special arguments object itself, without explicitly converting it to an array.
// The second code snippet (args.length) accesses the length property directly on the array created by the rest parameter.
