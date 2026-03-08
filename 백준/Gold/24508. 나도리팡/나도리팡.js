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

while (left < right) {
  const diff = Math.min(input[left], K - input[right]);
  T -= diff;

  if (T < 0) break;

  input[right] += diff;
  input[left] -= diff;

  if (input[left] === 0) left++;
  if (input[right] === K) right--;
}

console.log((input[left] === K || input[left] === 0) && T >= 0 ? "YES" : "NO");
