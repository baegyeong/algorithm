const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, M], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const pail = Array(N + 1).fill(0);
pail[1] = 100;

const graph = Array.from({ length: N + 1 }, () => []);

for (const [v, w] of input) {
  graph[v].push(w);
}

for (let i = 1; i <= N; i++) {
  const water = pail[i] / graph[i].length;
  if (graph[i].length) {
    pail[i] = 0;
  }

  for (const next of graph[i]) {
    pail[next] += water;
  }
}

console.log(Math.max(...pail));
