// Approach 4: One Liner
// To showcase some of the syntax JavaScript provides, here is a one liner solution. Let's look at the different parts of the code to understand how it works.

// var memoize = (fn, cache = {}) => (...args) => the memoize function is declared and it accepts two arguments: A function fn and an optional object cache. Since a 2nd argument is never passed, cache will always be set to an empty object {}. The memoize function goes onto return another function that accept arbitrarily many arguments.
// ?? This is the Nullish coalescing operator. It will return the first operand to its left if and only if the first operand is NOT null or undefined. Otherwise it will return the 2nd operand to its right.
// cache[args.join()] this converts the arguments to a comma-separated string and returns the value associated with that key. If the value doesn't exist it returns undefined (causing the function to return the value on the right side of ??).
// (cache[args.join()] = fn(...args)) sets the key on the cache to the output of the provided function. It then returns that value. This code gets hit if there is a cache-miss.

var memoize =
  (fn, cache = {}) =>
  (...args) =>
    cache[args.join()] ?? (cache[args.join()] = fn(...args));
