const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const board = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const actions = input.slice(N + 1).map((line) => line.split(" "));

const newBoard = Array.from({ length: N }, () => Array(M).fill("S"));

const directions = {
  W: [0, -1],
  E: [0, 1],
  N: [-1, 0],
  S: [1, 0],
};

let answer = 0;

for (let i = 0; i < R * 2; i += 2) {
  const [x, y] = actions[i].map((item) => +item - 1);
  const [dx, dy] = directions[actions[i][2]];

  if (newBoard[x][y] === "F") {
    continue;
  }

  newBoard[x][y] = "F";
  answer++;

  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    const K = board[x][y];

    for (let j = 1; j <= K - 1; j++) {
      const nx = x + dx * j;
      const ny = y + dy * j;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (newBoard[nx][ny] === "F") continue;

      newBoard[nx][ny] = "F";
      answer++;

      queue.push([nx, ny]);
    }
  }

  const [defenseX, defenseY] = actions[i + 1].map((item) => +item - 1);
  newBoard[defenseX][defenseY] = "S";
}

console.log(answer + "\n" + newBoard.map((item) => item.join(" ")).join("\n"));
