const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: n }, () => new Array(m).fill(-1));
const graph = [];
const directions = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];
let goal;

for (let i = 0; i < n; i++) {
  const node = input[i].split(" ").map(Number);
  if (node.includes(2)) {
    const index = node.findIndex((item) => item === 2);
    goal = [i, index];
  }

  graph.push(node);
}

const queue = [goal];
visited[goal[0]][goal[1]] = 0;

while (queue.length) {
  const [x, y] = queue.shift();

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (graph[nx][ny] === 0) continue;
    if (visited[nx][ny] !== -1) continue;

    visited[nx][ny] = visited[x][y] + 1;
    queue.push([nx, ny]);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) visited[i][j] = 0;
  }
}

console.log(visited.map((row) => row.join(" ")).join("\n"));
