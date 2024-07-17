/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // let count = 0;
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args); // Serialize the arguments to create a unique key
    if (cache.has(key)) {
      return cache.get(key);
    }
    // count++;
    const result = fn(...args);
    cache.set(key, result);
    console.log(cache);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
