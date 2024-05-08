const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, r, c] = input[0].split(" ").map(Number);

const z = (n, r, c, q) => {
  if (n === 0) return q;
  let half = 2 ** (n - 1);
  let quad = 0;
  if (r < half && c < half) {
    quad = 1;
  } else if (r < half && c >= half) {
    quad = 2;
    c -= half;
  } else if (r >= half && c < half) {
    quad = 3;
    r -= half;
  } else if (r >= half && c >= half) {
    quad = 4;
    r -= half;
    c -= half;
  }
  q += (quad - 1) * half ** 2;
  return z(n - 1, r, c, q);
};

console.log(z(n, r, c, 0));
