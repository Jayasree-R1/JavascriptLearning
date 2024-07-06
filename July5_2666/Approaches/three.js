// see this before this solution

// /Users/jshree/Desktop/LEETCODE/July5_2666/otherSolutions/one.js

var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn.apply(this, args);
    }
  };
};
