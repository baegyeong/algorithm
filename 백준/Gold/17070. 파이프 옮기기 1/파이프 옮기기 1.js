const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
input.shift();
input = input.map((x) => x.split(" ").map(Number));

let answer = 0;

function move(x, y, pipe) {
  if (x === N - 1 && y === N - 1) {
    answer++;
    return;
  }
  if (pipe === 0 || pipe === 2) {
    if (y + 1 < N && input[x][y + 1] === 0) {
      move(x, y + 1, 0);
    }
  }
  if (pipe === 1 || pipe === 2) {
    if (x + 1 < N && input[x + 1][y] === 0) {
      move(x + 1, y, 1);
    }
  }
  if (x < N - 1 && y < N - 1) {
    if (
      input[x + 1][y + 1] === 0 &&
      input[x + 1][y] === 0 &&
      input[x][y + 1] === 0
    ) {
      move(x + 1, y + 1, 2);
    }
  }
}

move(0, 1, 0);

if (input[N - 1][N - 1] === 1) {
  console.log(0);
} else {
  console.log(answer);
}
