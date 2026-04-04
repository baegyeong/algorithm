const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number);

let left = 0;
let right = arr.reduce((acc, cur) => acc + cur, 0);
let answer = 0;

while (left <= right) {
  const mid = parseInt((left + right) / 2);
  let count = 1;
  let rest = mid;

  for (let i = 0; i < N; i++) {
    const money = arr[i];

    if (mid < money) {
      count = M + 1;
      break;
    }

    if (rest < money) {
      count++;
      rest = mid;
    }

    rest -= arr[i];
  }

  if (count <= M) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
