const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((item) => item.split("").map(Number));
const dist = Array.from({ length: N }, () => Array(M).fill(Infinity));

let deque = [[0, 0]];
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

dist[0][0] = 0;

while (deque.length) {
  const [x, y] = deque.shift();

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    const newDist = dist[x][y] + graph[nx][ny];

    if (newDist < dist[nx][ny]) {
      dist[nx][ny] = newDist;

      if (graph[nx][ny] === 0) {
        deque.unshift([nx, ny]);
      } else {
        deque.push([nx, ny]);
      }
    }
  }
}

console.log(dist[N - 1][M - 1]);
