const { isDivisibleByThree } = require("./task_1_divisible_by_3.js");

let passCount = 0;
let failCount = 0;

// Test 1
try {
  if (!isDivisibleByThree("111")) throw new Error();
  console.log("PASS: successfully accepted '111'");
  passCount++;
} catch {
  console.log("FAIL: failed to accept '111'");
  failCount++;
}

// Test 2
try {
  if (isDivisibleByThree("1100")) throw new Error();
  console.log("PASS: successfully rejected '1100'");
  passCount++;
} catch {
  console.log("FAIL: failed to reject '1100'");
  failCount++;
}

// Test 3
try {
  if (!isDivisibleByThree("")) throw new Error();
  console.log("PASS: successfully accepted empty string");
  passCount++;
} catch {
  console.log("FAIL: failed to accept empty string");
  failCount++;
}

// Test 4
try {
  if (isDivisibleByThree("123")) throw new Error();
  console.log("PASS: successfully rejected non-binary string");
  passCount++;
} catch {
  console.log("FAIL: failed to reject non-binary string");
  failCount++;
}

console.log("==================");
console.log(`Total Tests: ${passCount + failCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
