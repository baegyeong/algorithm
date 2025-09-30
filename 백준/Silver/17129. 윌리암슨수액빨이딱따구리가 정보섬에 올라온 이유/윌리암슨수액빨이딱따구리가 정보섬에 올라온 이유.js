const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.shift();

const graph = [];
const visited = Array.from({ length: n }, () => Array(m).fill(1));
const directions = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
const queue = [];
let answer;

for (let i = 0; i < input.length; i++) {
  const line = input[i].split("").map(Number);
  graph.push(line);

  if (!queue.length && line.includes(2)) {
    queue.push([i, line.findIndex((item) => item === 2)]);
  }
}

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const [dx, dy] = directions[i];
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] > 1) continue;

    const target = graph[nx][ny];
    if (target === 1) continue;
    if (target === 0) {
      visited[nx][ny] += visited[x][y];
      queue.push([nx, ny]);
      continue;
    }
    if (target === 3 || target === 4 || target === 5) {
      visited[nx][ny] += visited[x][y] - 1;

      answer = visited[nx][ny];
      break;
    }
  }

  if (answer) break;
}

if (answer) {
  console.log(`TAK\n${answer}`);
} else {
  console.log("NIE");
}
