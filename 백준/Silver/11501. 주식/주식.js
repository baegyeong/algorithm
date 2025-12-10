const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
for (let i = 0; i < T; i++) {
  const N = +input[i * 2 + 1];
  const arr = input[i * 2 + 2].split(" ").map(Number);

  let max = arr[N - 1];
  let profit = 0;
  for (let j = N - 2; j >= 0; j--) {
    if (max <= arr[j]) {
      max = arr[j];
    } else {
      profit += max - arr[j];
    }
  }

  console.log(profit);
}
