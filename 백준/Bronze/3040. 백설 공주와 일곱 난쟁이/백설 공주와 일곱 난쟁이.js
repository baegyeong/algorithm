const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let sum_input = input.reduce((a, b) => a + b);
let a = 0,
  b = 0;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum_input - (input[i] + input[j]) === 100) {
      a = input[i];
      b = input[j];
      break;
    }
  }
}

console.log(input.filter((x) => x !== a && x !== b).join("\n"));
