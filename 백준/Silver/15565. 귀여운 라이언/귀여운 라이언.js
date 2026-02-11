const [[N, K], input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let left = 0;
let lionCount = 0;
let answer = Infinity;

for (let right = 0; right < N; right++) {
  if (input[right] === 1) lionCount++;

  while (lionCount >= K) {
    answer = Math.min(answer, right - left + 1);

    if (input[left] === 1) lionCount--;
    left++;
  }
}

console.log(answer === Infinity ? -1 : answer);
