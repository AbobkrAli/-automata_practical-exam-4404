// check if the string 1s could be divided by 3
export function isDivisibleByThree(binaryString) {
  let onesCount = 0; // count the number of 1s

  // a loop that checks each letter in the loop if it's 0 or 1 and if the number is one the increase it
  for (let i = 0; i < binaryString.length; i++) {
    // handling the error if it enters something except the 0 and 1
    if (binaryString[i] !== "0" && binaryString[i] !== "1") {
      console.log(`the ${binaryString} is not a binary string`);
      return false;
    }

    // if the letter is 1 then increase the onesCount
    if (binaryString[i] === "1") {
      onesCount++;
    }
  }

  // Check if count could be divided by 3
  let result = onesCount % 3 === 0;

  // Printing the result
  if (result === true) {
    console.log(`the ${binaryString} could be divided by 3`);
    return result;
  } else {
    console.log(`the ${binaryString} could not be divided by 3`);
    return result;
  }
}

isDivisibleByThree("110001010"); // will return it can't be divided
isDivisibleByThree("11000101101"); // will return it can be divided
isDivisibleByThree("11000501203"); // will return this is not binary string
