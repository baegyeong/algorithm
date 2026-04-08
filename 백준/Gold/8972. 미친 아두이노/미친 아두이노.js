const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
let board = input.slice(1, 1 + R).map((item) => item.split(""));
const directions = input.at(-1).split("").map(Number);

const directionInfo = {
  1: [1, -1],
  2: [1, 0],
  3: [1, 1],
  4: [0, -1],
  5: [0, 0],
  6: [0, 1],
  7: [-1, -1],
  8: [-1, 0],
  9: [-1, 1],
};

let arduino = [];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (board[i][j] === "I") {
      arduino = [i, j];
      board[i][j] = [".", 0];
    } else if (board[i][j] === "R") {
      board[i][j] = ["R", 1];
    } else board[i][j] = [".", 0];
  }
}

for (let turn = 0; turn < directions.length; turn++) {
  const direction = directions[turn];

  const [prevX, prevY] = arduino;
  const [dx, dy] = directionInfo[direction];

  const targetX = dx + prevX;
  const targetY = dy + prevY;

  arduino = [targetX, targetY];

  checkSamePosition(targetX, targetY, turn);

  const resultMove = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j][0] !== "R") continue;

      let minPosition = [0, 0, Infinity];

      for (const [dx, dy] of Object.values(directionInfo)) {
        const nx = dx + i;
        const ny = dy + j;
        if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

        const betweenDistance = calculateDistance(targetX, targetY, nx, ny);
        if (minPosition[2] > betweenDistance) {
          minPosition = [nx, ny, betweenDistance];
        }
      }

      resultMove.push([minPosition[0], minPosition[1]]);
    }
  }

  const nextBoard = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => [".", 0]),
  );

  for (const [nextX, nextY] of resultMove) {
    nextBoard[nextX][nextY][0] = "R";
    nextBoard[nextX][nextY][1] += 1;
  }

  board = nextBoard;

  checkSamePosition(targetX, targetY, turn);

  const removeCrazy = [];

  for (let crazyX = 0; crazyX < R; crazyX++) {
    for (let crazyY = 0; crazyY < C; crazyY++) {
      if (board[crazyX][crazyY][1] > 1) {
        removeCrazy.push([crazyX, crazyY]);
      }
    }
  }

  for (const [removeX, removeY] of removeCrazy) {
    board[removeX][removeY] = [".", 0];
  }
}

console.log(printBoard());

function calculateDistance(r1, s1, r2, s2) {
  return Math.abs(r1 - r2) + Math.abs(s1 - s2);
}

function checkSamePosition(x, y, turn) {
  if (board[x][y][0] === "R") {
    console.log(`kraj ${turn + 1}`);
    process.exit();
  }
}

function printBoard() {
  board[arduino[0]][arduino[1]] = "I";
  return board.map((line) => line.map((item) => item[0]).join("")).join("\n");
}
