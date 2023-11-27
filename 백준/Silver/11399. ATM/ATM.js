const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const people = Number(input[0]);
const time = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let answer = 0;
for (let i = 0; i < people; i++) {
  result = result + time[i];
  answer += result;
}

console.log(answer);
