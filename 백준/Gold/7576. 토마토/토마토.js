const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);

for (let i = 1; i <= N; i++) {
  graph[i - 1] = input[i].split(" ").map(Number);
}

const directions = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];

let queue = [];

graph.forEach((row, i) =>
  row.forEach((tomato, j) => {
    if (tomato === 1) queue.push([i, j]);
  })
);

let maxDay = 0;

while (queue.length) {
  nextQueue = [];
  for (const [x, y] of queue) {
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = 1;
        nextQueue.push([nx, ny]);
      }
    }
  }
  queue = nextQueue;
  if (queue.length > 0) maxDay++;
}

const isAllRipe = graph.every((row) => row.every((tomato) => tomato !== 0));

console.log(isAllRipe ? maxDay : -1);
