const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i <= N; i++) {
  graph.push(input[i].split("").map(Number));
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

const queue = [[0, 0, 0, 1]];
let head = 0;
visited[0][0][0] = true;

let answer = -1;

while (head < queue.length) {
  const [x, y, broke, dist] = queue[head++];

  if (x === N - 1 && y === M - 1) {
    answer = dist;
    break;
  }

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (graph[nx][ny] === 0 && !visited[nx][ny][broke]) {
      visited[nx][ny][broke] = true;
      queue.push([nx, ny, broke, dist + 1]);
    }

    if (graph[nx][ny] === 1 && broke === 0 && !visited[nx][ny][1]) {
      visited[nx][ny][1] = true;
      queue.push([nx, ny, 1, dist + 1]);
    }
  }
}

console.log(answer);
