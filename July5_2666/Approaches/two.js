// Approach 2: Implicitly Return Undefined
// If you don't return any value from a function, it will implicitly return undefined. We can use this fact to shorten the code slightly.

var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};
