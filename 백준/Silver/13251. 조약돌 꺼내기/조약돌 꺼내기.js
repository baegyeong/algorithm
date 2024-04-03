const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const m = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const makeMultipleNum = (x) => {
  let k = Number(input[2]);
  const n_arr = Array.from({ length: k }, () => x--);
  const multiple = n_arr.reduce((a, b) => a * b);
  const k_arr = Array.from({ length: k }, () => k--);
  const k_multiple = k_arr.reduce((a, b) => a * b);
  return multiple / k_multiple;
};

const cases = arr.map((x) => makeMultipleNum(x));
const casesSum = cases.reduce((a, b) => a + b);

const totalNum = arr.reduce((a, b) => a + b);
const totalSum = makeMultipleNum(totalNum);

const percentage = casesSum / totalSum;
console.log(percentage);
