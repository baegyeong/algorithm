const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solveArrayA(input) {
  const [H, W, X, Y] = input[0].split(" ").map(Number);
  const B = input.slice(1).map((row) => row.split(" ").map(Number));

  const A = new Array(H).fill(null).map(() => new Array(W).fill(0));

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (i >= X && j >= Y) {
        A[i][j] = B[i][j] - A[i - X][j - Y];
      } else {
        A[i][j] = B[i][j];
      }
    }
  }

  return A;
}

const A = solveArrayA(input);

for (let i = 0; i < A.length; i++) {
  console.log(A[i].join(" "));
}
