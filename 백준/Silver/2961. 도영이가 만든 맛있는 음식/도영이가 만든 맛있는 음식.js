const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i + 1].split(" ").map(Number));
}

const visited = new Array(N).fill(false);
let result = [];
let min = Infinity;

const dfs = (depth) => {
  if (depth >= 1) {
    let sourness = 1;
    let bitter = 0;

    for (const [x, y] of result) {
      sourness *= x;
      bitter += y;
    }
    min = Math.min(min, Math.abs(sourness - bitter));
  }

  for (let i = depth; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(i + 1);
    result.pop();
    visited[i] = false;
  }
};

dfs(0);
console.log(min);
