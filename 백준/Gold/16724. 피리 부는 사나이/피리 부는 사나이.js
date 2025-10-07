const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((item) => item.split(""));
const visited = Array.from({ length: N }, () => Array(M).fill(0));

const directions = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

let answer = 0,
  groupId = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      groupId++;
      dfs(i, j);
    }
  }
}

function dfs(x, y) {
  const stack = [[x, y]];

  while (stack.length) {
    const [cx, cy] = stack.pop();

    if (visited[cx][cy]) continue;
    visited[cx][cy] = groupId;

    const [dx, dy] = directions[graph[cx][cy]];
    const nx = dx + cx;
    const ny = dy + cy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) return;

    if (visited[nx][ny]) {
      if (visited[nx][ny] === groupId) answer++;
      return;
    }

    stack.push([nx, ny]);
  }
}

console.log(answer);
