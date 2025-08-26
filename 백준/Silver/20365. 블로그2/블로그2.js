const fs = require("fs");
const [N, input] = fs.readFileSync(0, 'utf-8').trim().split("\n");

const arr = [0, 0];
for (let i = 0; i < input.length; i++) {
  if (input[i] === "R" && (i === 0 || input[i - 1] !== "R")) arr[0]++;
  if (input[i] === "B" && (i === 0 || input[i - 1] !== "B")) arr[1]++;
}

console.log(Math.min(...arr) + 1);
