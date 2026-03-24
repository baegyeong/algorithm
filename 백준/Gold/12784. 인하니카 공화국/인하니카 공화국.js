const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[T], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let t = 0; t < T; t++) {
  const [N, M] = input.shift();
  const info = input.splice(0, M);

  const graph = Array.from({ length: N + 1 }, () => []);

  for (const [a, b, cost] of info) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  if (N === 1) {
    console.log(0);
    continue;
  }

  function dfs(now, parent) {
    let sum = 0;
    let isLeaf = true;

    for (const [next, cost] of graph[now]) {
      if (next === parent) continue;

      isLeaf = false;

      const child = dfs(next, now);
      sum += Math.min(cost, child);
    }

    if (isLeaf) return Infinity;

    return sum;
  }

  console.log(dfs(1, 0));
}
