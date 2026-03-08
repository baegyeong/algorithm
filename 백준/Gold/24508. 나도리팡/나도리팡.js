const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [[N, K, T], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);

let left = 0,
  right = N - 1;

if (T === 0 && input.every((item) => item === 0)) {
  console.log("YES");
  return;
}

while (T > 0 && left < right) {
  const diff = Math.min(input[left], K - input[right]);
  input[right] += diff;

  input[left] -= diff;
  T -= diff;

  if (input[left] === 0) {
    left++;
  }

  if (left === right) break;
  if (input[right] === K) right--;
}

console.log(input[right] === K && T >= 0 ? "YES" : "NO");
