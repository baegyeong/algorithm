const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const m = +input[1];

const graph = Array.from({ length: n }, () => Array(n).fill(Infinity));
const route = Array.from({ length: n }, () => Array(n).fill(null));

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
}

for (let i = 2; i < m + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  const u = a - 1;
  const v = b - 1;
  if (c < graph[u][v]) {
    graph[u][v] = c;
    route[u][v] = v;
  }
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cost = graph[i][k] + graph[k][j];
      if (graph[i][j] > cost) {
        graph[i][j] = cost;
        route[i][j] = route[i][k];
      }
    }
  }
}

let answer = "";

for (let i = 0; i < n; i++) {
  answer +=
    graph[i].map((item) => (item === Infinity ? 0 : item)).join(" ") + "\n";
}

function getPath(i, j) {
  if (route[i][j] === null) return [];

  const path = [i];
  while (i !== j) {
    i = route[i][j];
    path.push(i);
  }
  return path;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === Infinity || i === j) {
      answer += "0\n";
      continue;
    }

    const path = getPath(i, j).map((item) => item + 1);
    answer += `${path.length} ${path.join(" ")}\n`;
  }
}

console.log(answer);
