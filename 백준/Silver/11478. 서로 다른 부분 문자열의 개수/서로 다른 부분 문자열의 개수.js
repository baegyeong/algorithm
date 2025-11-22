const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const len = input.length;
const str = new Set();

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j <= len; j++) {
    str.add(input.substring(i, j));
  }
}

console.log(str.size);
