const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);
const len = input[1].length;
let result = input[1].split("");

for (let i = 2; i <= num; i++) {
  for (let j = 0; j < len; j++) {
    if (result[j] !== input[i][j]) {
      result[j] = "?";
    }
  }
}
console.log(result.join(""));
