const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const display = Array.from({ length: N }, () => Array(M).fill(0));
const T = +input[N + 1];

for (let i = 1; i <= N; i++) {
  const pixelColor = input[i].split(" ").map(Number);
  for (let j = 0; j < 3 * M; j += 3) {
    const sum = pixelColor[j] + pixelColor[j + 1] + pixelColor[j + 2];
    const average = sum / 3;

    if (average >= T) {
      display[i - 1][j / 3] = 1;
    }
  }
}

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function bfs(i, j) {
  const queue = [[i, j]];
  let head = 0;
  visited[i][j] = true;

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (display[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (display[i][j] === 1 && !visited[i][j]) {
      count++;
      bfs(i, j);
    }
  }
}

console.log(count);
