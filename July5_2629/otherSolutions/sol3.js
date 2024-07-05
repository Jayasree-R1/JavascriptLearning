// To handle this situation, you can use the call or apply methods when invoking the composed functions. This allows you to explicitly set the value of this when calling the function:

const obj = {
  value: 1,
  increment: function () {
    this.value++;
    return this.value;
  },
  double: function () {
    this.value *= 2;
    return this.value;
  },
};

// Composing the methods while preserving `this`
const goodCompose = function (functions, context) {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i].call(context, result);
    }
    return result;
  };
};

const goodComposedFn = goodCompose([obj.increment, obj.double], obj);
console.log(goodComposedFn(1)); // This works as expected, because `this` is `obj` inside `increment` and `double`
