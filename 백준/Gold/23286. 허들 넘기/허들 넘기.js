const [[N, M, T], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i === j) {
      graph[i][j] = 0;
    }
  }
}

for (let i = 0; i < M; i++) {
  const [u, v, h] = input[i];
  graph[u][v] = h;
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= N; k++) {
      graph[j][k] = Math.min(graph[j][k], Math.max(graph[j][i], graph[i][k]));
    }
  }
}

for (const [s, e] of input.slice(M)) {
  if (graph[s][e] === Infinity) {
    console.log(-1);
  } else {
    console.log(graph[s][e]);
  }
}
