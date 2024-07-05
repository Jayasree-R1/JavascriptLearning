// Implementation using a for ... of loop:
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let input = x;

    for (const func of functions.reverse()) {
      input = func(input);
    }

    return input;
  };
};

// Complexity Analysis
// Let N be the number of functions in the array.

// Time complexity: O(N). Each of the N functions in the array is called exactly once, assuming that each function has a constant time complexity.

// Space complexity: O(1). The iterative method uses a single variable input to store the intermediate results, not requiring any additional space.
