const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("");

let count = 0;
let stack = [];
let tmp = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
  } else if (input[i] === ")") {
    if (input[i - 1] === "(") {
      count += stack.length - 1 + tmp;
      if (tmp > 0) {
        tmp = 0;
      }
    } else {
      tmp += 1;
    }
    stack.pop();
  }
}

console.log(count + tmp);
