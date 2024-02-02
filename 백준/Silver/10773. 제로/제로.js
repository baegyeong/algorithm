const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let result = [];
const num = Number(input[0]);
input.shift();
const arr = input.map(Number);

for (let i = 0; i < num; i++) {
  if (arr[i] === 0) {
    result.pop();
  } else {
    result.push(arr[i]);
  }
}

const answer = result.length !== 0 ? result.reduce((a, b) => a + b) : 0;

console.log(answer);
