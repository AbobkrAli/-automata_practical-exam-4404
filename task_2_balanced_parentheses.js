// i choosed to make the pranthases balance check with PDA
export function isParenthesesBalanced(str) {
  let stack = []; // the stack which we are going to store in parentheses

  //  loop to check every pranthase
  for (let i = 0; i < str.length; i++) {
    let currentParentheses = str[i];

    // add the open prantheses to the stack
    if (currentParentheses === "(") {
      stack.push(currentParentheses);
    }

    // pop if it's closing pranthases
    else if (currentParentheses === ")") {
      // if the stack is empty then we can't pop so we return false
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
    // else then return false "if it's not either opening or closing pranthaseses"
    else {
      return false;
    }
  }

  let isBalanced = stack.length === 0; // if the stack is empty then it's balanced

  return isBalanced;
}

console.log(isParenthesesBalanced("()")); // reutrns true
console.log(isParenthesesBalanced("()))")); // reutrns false
