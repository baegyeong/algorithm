const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const n_arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let m_arr = input[3].split(" ").map(Number);

const lower_bound = (target, len) => {
  let start = 0;
  let end = len;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (n_arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return start;
};

const upper_bound = (target, len) => {
  let start = 0;
  let end = len;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (n_arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return start;
};

console.log(m_arr.map((x) => upper_bound(x, N) - lower_bound(x, N)).join(" "));
