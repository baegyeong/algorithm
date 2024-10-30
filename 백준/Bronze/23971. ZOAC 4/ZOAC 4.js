const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

const [H, W, N, M] = input.split(" ").map(Number);

console.log(
  Math.ceil(H / (parseInt(N) + 1)) * Math.ceil(W / (parseInt(M) + 1))
);
