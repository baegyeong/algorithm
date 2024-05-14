const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let answer = 0;
let stick = 64;
let result = 0;

while (answer !== input) {
  if (input < answer + stick) {
    stick /= 2;
  } else {
    answer += stick;
    result++;
  }
}

console.log(result);
