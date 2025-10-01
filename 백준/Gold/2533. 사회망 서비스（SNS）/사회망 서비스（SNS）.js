const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
input.shift();

const graph = Array.from({ length: N + 1 }, () => []);
const dp = Array.from({ length: N + 1 }, () => Array(2).fill(0));
const visited = Array(N + 1).fill(false);

for (const line of input) {
  const [u, v] = line.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

function dfs(node) {
  visited[node] = true;
  dp[node][0] = 0;
  dp[node][1] = 1;

  for (const child of graph[node]) {
    if (!visited[child]) {
      dfs(child);
      dp[node][0] += dp[child][1];
      dp[node][1] += Math.min(dp[child][0], dp[child][1]);
    }
  }
}

dfs(1);
console.log(Math.min(dp[1][0], dp[1][1]));
