let [[N, Q], P, ...X] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

P.sort((a, b) => a - b);
X = X.flat();

let result = "";
const prefix = [P[0]];

for (let i = 1; i < N; i++) {
  prefix.push(P[i] + prefix[i - 1]);
}

for (let i = 0; i < Q; i++) {
  let start = 0,
    end = N;
  const target = X[i];

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (target < P[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  const lessThanTarget = target * start - (prefix[start - 1] || 0);
  const greaterThanTarget =
    prefix[N - 1] - (prefix[start - 1] || 0) - target * (N - start);

  result += lessThanTarget + greaterThanTarget + "\n";
}

console.log(result);
