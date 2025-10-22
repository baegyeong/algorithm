const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const board = Array(H);
const moveCount = +input[H + 1];

const directions = {
  W: [-1, 0],
  A: [0, -1],
  S: [1, 0],
  D: [0, 1],
};

let dao = [],
  diz = [];

for (let i = 1; i < H + 1; i++) {
  board[i - 1] = input[i].split("");

  if (!dao.length && board[i - 1].includes("D")) {
    const col = board[i - 1].findIndex((item) => item === "D");
    dao = [i - 1, col];
  }

  if (!diz.length && board[i - 1].includes("Z")) {
    const col = board[i - 1].findIndex((item) => item === "Z");
    diz = [i - 1, col];
  }
}

const visited = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array(moveCount + 1).fill(false))
);

const queue = [[dao[0], dao[1], 0, ""]];
visited[dao[0]][dao[1]][0] = true;

while (queue.length) {
  const [x, y, depth, path] = queue.shift();

  if (depth === moveCount) continue;

  for (const dir of input[H + depth + 2].split(" ")) {
    const [dx, dy] = directions[dir];
    const nx = dx + x;
    const ny = dy + y;
    const nextDepth = depth + 1;

    if (nx < 0 || nx >= H || ny < 0 || ny >= W) continue;
    if (board[nx][ny] === "@") continue;
    if (visited[nx][ny][nextDepth]) continue;

    if (diz[0] === nx && diz[1] === ny) {
      console.log(`YES\n${path + dir}`);
      return;
    }

    visited[nx][ny][nextDepth] = true;
    queue.push([nx, ny, nextDepth, path + dir]);
  }
}

console.log("NO");
