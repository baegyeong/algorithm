const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

const returnLastIdx = (arr) => {
  return arr[arr.length - 1];
};

for (let x of input) {
  if (x === ".") break;

  let temp = [];
  let isBalanced = true;

  for (let i of x) {
    if (i === "[" || i === "(") {
      temp.push(i);
    } else if (i === "]") {
      if (temp.length === 0 || returnLastIdx(temp) !== "[") {
        isBalanced = false;
        break;
      } else {
        temp.pop();
      }
    } else if (i === ")") {
      if (temp.length === 0 || returnLastIdx(temp) !== "(") {
        isBalanced = false;
        break;
      } else {
        temp.pop();
      }
    }
  }

  let answer = temp.length === 0 && isBalanced ? "yes" : "no";
  result += answer + "\n";
}

console.log(result);
