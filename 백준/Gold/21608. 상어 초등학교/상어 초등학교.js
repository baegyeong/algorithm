const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const seat = Array.from({ length: N }, () => Array(N).fill(0));
const order = [];

const visited = Array(N * N + 1).fill(false);
const students = Array.from({ length: N * N + 1 }, () => []);

for (let i = 1; i <= N * N; i++) {
  const [student, ...like] = input[i].split(" ").map(Number);
  students[student] = like;
  order.push(student);
}

const directions = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

function search(element) {
  if (visited[element]) return;

  let maxLike = -1;
  let maxEmpty = -1;
  let candidates = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (seat[i][j] !== 0) continue;

      let likeCount = 0;
      let emptyCount = 0;

      for (const [dx, dy] of directions) {
        const nx = i + dx;
        const ny = j + dy;
        if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
        if (seat[nx][ny] === 0) emptyCount++;
        else if (students[element].includes(seat[nx][ny])) likeCount++;
      }

      if (
        likeCount > maxLike ||
        (likeCount === maxLike && emptyCount > maxEmpty)
      ) {
        maxLike = likeCount;
        maxEmpty = emptyCount;
        candidates = [[i, j]];
      } else if (likeCount === maxLike && emptyCount === maxEmpty) {
        candidates.push([i, j]);
      }
    }
  }

  candidates.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  const [x, y] = candidates[0];
  seat[x][y] = element;
}

for (const node of order) {
  search(node);
}

let result = 0;
const satisfaction = [0, 1, 10, 100, 1000];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let cnt = 0;

    for (const [dx, dy] of directions) {
      const nx = dx + i;
      const ny = dy + j;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (students[seat[i][j]].includes(seat[nx][ny])) cnt++;
    }

    result += satisfaction[cnt];
  }
}

console.log(result);
