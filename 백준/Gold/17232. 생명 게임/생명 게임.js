const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, T] = input[0].split(" ").map(Number);
const [K, a, b] = input[1].split(" ").map(Number);
const graph = input.slice(2).map((line) => line.split(""));

let beforeGraph = [...graph];

for (let i = 0; i < T; i++) {
  const afterGraph = Array.from({ length: N }, () => Array(M).fill("."));
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      func(j, k, afterGraph);
    }
  }
  beforeGraph = [...afterGraph];
}

function func(x, y, afterGraph) {
  const isExistLife = beforeGraph[x][y] === "*";
  let lifeCount = 0;

  for (let i = x - K; i <= x + K; i++) {
    for (let j = y - K; j <= y + K; j++) {
      if (i < 0 || i >= N || j < 0 || j >= M) continue;
      if (i === x && j === y) continue;

      if (beforeGraph[i][j] === "*") lifeCount += 1;
    }
  }

  if (isExistLife) {
    if (lifeCount >= a && lifeCount <= b) {
      afterGraph[x][y] = "*";
    } else if (lifeCount < a || lifeCount > b) {
      afterGraph[x][y] = ".";
    }
  } else {
    if (lifeCount > a && lifeCount <= b) {
      afterGraph[x][y] = "*";
    }
  }
}

console.log(beforeGraph.map((item) => item.join("")).join("\n"));
