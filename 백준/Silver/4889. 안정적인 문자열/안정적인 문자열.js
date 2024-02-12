const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = 0;
let stack = [];
for (let i = 0; i < input.length; i++) {
  if (input[i][0] === "-") break;
  stack = [];
  count = 0;
  input[i] = input[i].split("");
  for (let j of input[i]) {
    if (j === "{") {
      stack.push(j);
    } else if (j === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        stack.push(j);
      }
    }
  }
  const len = stack.length;
  for (let k = 0; k < len; k++) {
    if (k % 2 === 0 && stack[k] === "}") {
      count += 1;
    } else if (k % 2 === 1 && stack[k] === "{") {
      count += 1;
    }
  }
  console.log(`${i + 1}. ${count}`);
}
