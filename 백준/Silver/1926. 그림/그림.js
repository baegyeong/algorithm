const fs = require("fs");
const [[n, m], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(0));
const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

let count = 0;

function bfs(x, y) {
  const queue = [[x, y]];
  visited[x][y] = 1;
  let size = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] !== 0) continue;
      if (input[nx][ny] === 1) {
        visited[nx][ny] += ++size;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j]) continue;
    if (input[i][j] === 0) continue;
    bfs(i, j);
    count++;
  }
}

console.log(count + "\n" + Math.max(...visited.flat()));
