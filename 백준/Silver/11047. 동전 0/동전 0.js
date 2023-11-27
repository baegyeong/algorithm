const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [N, K] = input[0].split(" ").map(Number);
let count = 0;

for (let i = N; i > 0; i--) {
  if (K >= +input[i]) {
    count += parseInt(K / +input[i]);
    K = K % +input[i];
  }
  if (K === 0) {
    break;
  }
}

console.log(count);
