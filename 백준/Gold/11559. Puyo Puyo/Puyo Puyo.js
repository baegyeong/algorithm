const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(""));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const ROW = 12;
const COL = 6;

let answer = 0;

function bfs(x, y, visited) {
  const color = input[x][y];
  const queue = [[x, y]];
  const group = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = dx + cx;
      const ny = dy + cy;

      if (
        nx >= 0 &&
        nx < ROW &&
        ny >= 0 &&
        ny < COL &&
        !visited[nx][ny] &&
        input[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        group.push([nx, ny]);
      }
    }
  }
  return group;
}

function applyGravity() {
  for (let col = 0; col < COL; col++) {
    let stack = [];

    for (let row = ROW - 1; row >= 0; row--) {
      if (input[row][col] !== ".") {
        stack.push(input[row][col]);
      }
    }

    for (let row = ROW - 1; row >= 0; row--) {
      input[row][col] = stack.shift() || ".";
    }
  }
}

while (true) {
  let visited = Array.from({ length: ROW }, () => Array(COL).fill(false));

  let exploded = false;

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (!visited[i][j] && input[i][j] !== ".") {
        const group = bfs(i, j, visited);

        if (group.length >= 4) {
          exploded = true;
          for (const [x, y] of group) {
            input[x][y] = ".";
          }
        }
      }
    }
  }

  if (!exploded) break;

  applyGravity();
  answer++;
}

console.log(answer);
