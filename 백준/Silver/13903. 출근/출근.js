const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
let graph = [];
const queue = [];
const visited = Array.from({ length: R }, () => Array(C).fill(0));

for (let i = 1; i <= R; i++) {
  graph[i - 1] = input[i].split(" ").map(Number);
  if (i == 1) {
    for (let j = 0; j < C; j++) {
      if (graph[i - 1][j] === 1) {
        queue.push([0, j]);
        visited[0][j] = 1;
      }
    }
  }
}

const N = Number(input[R + 1]);

let directions = [];
const ruleStart = R + 2;
for (let i = ruleStart; i < ruleStart + N; i++) {
  directions[i - ruleStart] = input[i].split(" ").map(Number);
}

let head = 0;
while (head < queue.length) {
  const [x, y] = queue[head++];

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= R || ny < 0 || ny >= C || visited[nx][ny]) continue;
    if (graph[nx][ny] === 1) {
      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

const count = visited[R - 1].filter((item) => item !== 0);
if (!count.length) {
  console.log(-1);
} else {
  console.log(Math.min(...count) - 1);
}
