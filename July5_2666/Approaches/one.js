// Approach 1: Rest Syntax
// We can declare a boolean which tracks whether the function has been called or not. Then we can use rest and spread syntax to pass the arguments if it has not been called yet.

var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (hasBeenCalled) {
      return undefined;
    } else {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};
