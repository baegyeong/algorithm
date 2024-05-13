const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let answer = 0;
let current = 0;
while (true) {
  if (answer > input) break;
  current += 1;
  answer += current;
}

console.log(current - 1);
