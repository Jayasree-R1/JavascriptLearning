// Approach 3: Bind Function to a Context
// JavaScript functions are sometimes bound to a this context. The most technically correct way to implement a higher-order function is to ensure the provided function is bound to the same context as the returned function.

// The following code showcases how functions can behave differently depending on which this context they are bound to.

const context = { Name: "Alice" };

function getName() {
  return this.Name;
}
const boundGetName = getName.bind(context);

getName(); // undefined
getName.apply(context, []); // "Alice"
// In the above example getName is NOT bound to context so it returns undefined. However you can use the Function.apply method to call getName() AND set this to be context. You can read more about Function.apply here.

// Now suppose you wanted to apply once to a method on a prototype.

const Person = function (name) {
  this.name = name;
};

Person.prototype.getName = once(function () {
  return this.name;
});

const alice = new Person("Alice");
alice.getName(); // Expected Output: "Alice"
// In order to get this behavior, you need to use the Function.apply method to ensure getName is provided with the appropriate context (the alice object in this case). Without this, getName will always return undefined.

// Note that this functionality is fairly niche, and isn't required in the problem. But it may be expected in a professional implementation.
