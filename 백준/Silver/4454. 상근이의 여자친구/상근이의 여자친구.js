const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (const tc of input) {
  const [a, b, c, d, m, t] = tc;

  let left = 0;
  let right = 1000;

  const limit = t / m;

  for (let i = 0; i < 100; i++) {
    const mid = (left + right) / 2;

    const fuel = a * mid ** 3 + b * mid ** 2 + c * mid + d;

    if (fuel <= limit) {
      left = mid;
    } else {
      right = mid;
    }
  }

  const answer = Math.floor((left + 1e-12) * 100) / 100;
  console.log(answer.toFixed(2));
}
