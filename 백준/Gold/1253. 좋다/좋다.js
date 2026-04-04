const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < N; i++) {
  const target = input[i];

  let left = 0,
    right = N - 1;

  while (left < right) {
    if (left === i) {
      left++;
      continue;
    }
    if (right === i) {
      right--;
      continue;
    }

    const sum = input[left] + input[right];

    if (target === sum) {
      answer++;
      break;
    } else if (target > sum) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(answer);
