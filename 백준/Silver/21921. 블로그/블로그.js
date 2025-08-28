const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < X; i++) sum += arr[i];

let maxSum = sum;
let count = 1;

for (let i = X; i < N; i++) {
  sum += arr[i] - arr[i - X];
  if (sum > maxSum) {
    maxSum = sum;
    count = 1;
  } else if (sum === maxSum) {
    count++;
  }
}

if (maxSum === 0) console.log("SAD");
else console.log(maxSum + "\n" + count);
