const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, T] = input[0].split(" ").map(Number);
const [K, a, b] = input[1].split(" ").map(Number);

let beforeGraph = input.slice(2).map((line) => line.split(""));

for (let t = 0; t < T; t++) {
  const ps = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      const val = beforeGraph[i - 1][j - 1] === "*" ? 1 : 0;
      ps[i][j] = val + ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1];
    }
  }

  const afterGraph = Array.from({ length: N }, () => Array(M).fill("."));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      func(x, y, afterGraph, ps);
    }
  }

  beforeGraph = afterGraph;
}

function func(x, y, afterGraph, ps) {
  const x1 = Math.max(0, x - K);
  const y1 = Math.max(0, y - K);
  const x2 = Math.min(N - 1, x + K);
  const y2 = Math.min(M - 1, y + K);

  const sum = ps[x2 + 1][y2 + 1] - ps[x1][y2 + 1] - ps[x2 + 1][y1] + ps[x1][y1];

  const isLife = beforeGraph[x][y] === "*";
  const lifeCount = sum - (isLife ? 1 : 0);

  if (isLife) {
    if (lifeCount >= a && lifeCount <= b) {
      afterGraph[x][y] = "*";
    }
  } else {
    if (lifeCount > a && lifeCount <= b) {
      afterGraph[x][y] = "*";
    }
  }
}

console.log(beforeGraph.map((row) => row.join("")).join("\n"));
