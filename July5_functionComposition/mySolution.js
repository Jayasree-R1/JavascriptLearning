var compose = function (...functions) {
  return function (x) {
    // let acc = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      let f = functions[i];
      let acc = f(x);
      x = acc;
    }
    return x;
  };
};
let fn = compose((x) => x + 1);
// let fn = compose(
//   (x) => x + 1,
//   (x) => x * x,
//   (x) => 2 * x
// );
console.log(fn(4));
