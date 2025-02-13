# Stale Closure Bug in React

This repository demonstrates a common error in React applications involving stale closures within `useEffect` hooks when using `setInterval` to update state.  The bug arises from referencing the previous state value inside the `setInterval` callback, leading to unexpected behavior.

## Bug Description
The `MyComponent` uses `useState` to manage a counter.  The `useEffect` hook sets up an interval to increment the counter. However, the `setInterval` callback uses the initial value of `count` instead of the updated value due to a stale closure.

## Solution
The solution involves using the functional update form of `setCount` to ensure that the latest state value is used. This approach uses the previous state value to calculate the next one correctly, resolving the stale closure issue.