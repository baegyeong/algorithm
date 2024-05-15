const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
input.shift();
input = input.map((x) => x.split(" ").map(Number));

let white = 0,
  blue = 0;

const divide = (x, y, length) => {
  let count = 0;

  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (input[i][j]) count += 1;
    }
  }

  if (!count) white += 1;
  else if (count === length * length) {
    blue += 1;
  } else {
    divide(x, y, length / 2);
    divide(x, y + length / 2, length / 2);
    divide(x + length / 2, y, length / 2);
    divide(x + length / 2, y + length / 2, length / 2);
  }
};

divide(0, 0, N);
console.log(white);
console.log(blue);
