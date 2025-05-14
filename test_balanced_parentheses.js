const { isParenthesesBalanced } = require("./task_2_balanced_parentheses.js");

let passCount = 0;
let failCount = 0;

// Test 1
try {
  if (!isParenthesesBalanced("()")) throw new Error();
  console.log("PASS: successfully accepted '()'");
  passCount++;
} catch {
  console.log("FAIL: failed to accept '()'");
  failCount++;
}

// Test 2
try {
  if (!isParenthesesBalanced("(())")) throw new Error();
  console.log("PASS: successfully accepted '(())'");
  passCount++;
} catch {
  console.log("FAIL: failed to accept '(())'");
  failCount++;
}

// Test 3
try {
  if (isParenthesesBalanced("())")) throw new Error();
  console.log("PASS: successfully rejected '())'");
  passCount++;
} catch {
  console.log("FAIL: failed to reject '())'");
  failCount++;
}

// Test 4
try {
  if (isParenthesesBalanced("(a)")) throw new Error();
  console.log("PASS: successfully rejected string with invalid characters");
  passCount++;
} catch {
  console.log("FAIL: failed to reject string with invalid characters");
  failCount++;
}

console.log("==================");
console.log(`Total Tests: ${passCount + failCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
