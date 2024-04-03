const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

const makeArray = (x) => {
  return Array.from({ length: k }, () => x--);
};

const makeMultipleNum = (arr) => {
  return arr.reduce((a, b) => a * b);
};

if (k === 0) {
  console.log(1);
} else {
  const n_arr = makeArray(n);
  const k_arr = makeArray(k);

  const n_multiple = makeMultipleNum(n_arr);
  const k_multiple = makeMultipleNum(k_arr);
  const answer = n_multiple / k_multiple;

  console.log(answer);
}
