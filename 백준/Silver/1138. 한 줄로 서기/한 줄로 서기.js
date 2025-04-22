const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
const result = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (count === arr[i] && result[j] === 0) {
      result[j] = i + 1;
      break;
    } else if (result[j] === 0) {
      count++;
    }
  }
}

console.log(result.join(" "));
