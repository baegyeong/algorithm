const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let visited = new Array(n).fill(false);
let selected = [];

let answer = new Set();
function dfs(arr, depth) {
  if (depth === m) {
    let temp = [];
    let result = [];
    for (let i of selected) {
      result.push(arr[i]);
    }
    for (let x of result) {
      temp.push(x);
    }
    answer.add(temp.join(" "));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log([...answer].join("\n"));
