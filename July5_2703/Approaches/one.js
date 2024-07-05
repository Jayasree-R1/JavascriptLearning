// Approach 1: Using argument object
// To solve this problem, we can leverage the fact that JavaScript provides the arguments object, which is an array-like object that contains all the arguments passed to a function. We can simply retrieve the length of the arguments object and return it.

// To be more specific, In JavaScript, arguments are passed as an array-like object. Because of this, you can use a lot of the same kind of functions on arguments as you can on arrays, including using arguments.length.

// Note1: The arguments object is automatically available inside functions and holds the arguments passed to the function.
// Note2: Using arguments.length provides direct access to the length without creating an intermediate array (args), which may be beneficial in certain scenarios.

// Implementation:

var argumentsLength = function (...args) {
  return arguments.length;
};

// Complexity Analysis:
// Time complexity: O(1)

// Space complexity: O(1)
