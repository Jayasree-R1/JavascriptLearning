// Approach 2: Asynchronous Programming with Promises and setTimeout without Return
// This approach is similar to the first one, but with a slight difference: for this problem, you don't need to explicitly return anything. This makes the following code a valid solution as well. This version of the sleep function doesn't return anything (or to be more precise, it returns undefined), because there's no return statement. But since the problem statement says, "It can resolve any value", this is perfectly acceptable. It's also a perfectly valid one-liner.

// Implementation

async function sleep(milliseconds) {
  await new Promise((res) => setTimeout(res, milliseconds));
}

// Complexity Analysis
// Time complexity: O(1). The time complexity of the function is O(1) because the computational effort remains constant regardless of the input. However, the actual time taken for the function to fulfill or complete may vary, as it involves initiating a timer and returning a promise, which is not directly related to the input size but rather the specific task being performed.

// Space complexity: O(1). The function uses a constant amount of space to store the promise and the timer. This does not change with the input value.
