const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const height = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const a = (input[i] - input[j]) / (i - j);
    const b = input[i] - a * (i + 1);
    let isPass = true;

    for (let k = j + 1; k < i; k++) {
      const y = a * (k + 1) + b;
      if (y > input[k]) {
        isPass = true;
      } else {
        isPass = false;
        break;
      }
    }

    for (let k = i + 1; k < j; k++) {
      const y = a * (k + 1) + b;
      if (y > input[k]) {
        isPass = true;
      } else {
        isPass = false;
        break;
      }
    }

    if (isPass) height[i]++;
  }
}

console.log(Math.max(...height));
