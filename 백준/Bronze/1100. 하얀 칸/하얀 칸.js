const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = 0;

for (let i = 0; i < 8; i++) {
  input[i] = input[i].split("");
  for (let j = 0; j < 8; j++) {
    const idx = i % 2 === 0 ? j * 2 : j * 2 + 1;
    count += input[i][idx] === "F" ? 1 : 0;
  }
}

console.log(count);
