const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, M, X], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (const [a, b, t] of input) {
  dist[a][b] = t;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

const minDist = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  minDist[i] = dist[i][X] + dist[X][i];
}

minDist[X] = 0;
console.log(Math.max(...minDist));
