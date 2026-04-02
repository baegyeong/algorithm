const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

let answer = 0;
let target = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] >= target) {
    answer += input[i] - target;
    target++;
  }
}

console.log(answer);
