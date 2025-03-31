const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);
const arr = [];
const queue = [];
let index = 0;

for (let h = 0; h < H; h++) {
  const layer = [];
  for (let n = 0; n < N; n++) {
    const row = input[index++].split(" ").map(Number);
    layer.push(row);
    for (let m = 0; m < M; m++) {
      if (row[m] === 1) {
        queue.push([h, n, m]);
      }
    }
  }
  arr.push(layer);
}

const dz = [1, -1, 0, 0, 0, 0];
const dx = [0, 0, -1, 1, 0, 0];
const dy = [0, 0, 0, 0, -1, 1];

let front = 0;
while (front < queue.length) {
  const [h, n, m] = queue[front++];

  for (let i = 0; i < 6; i++) {
    const nh = h + dz[i];
    const nn = n + dx[i];
    const nm = m + dy[i];

    if (nh < 0 || nh >= H || nn < 0 || nn >= N || nm < 0 || nm >= M) continue;
    if (arr[nh][nn][nm] === 0) {
      arr[nh][nn][nm] = arr[h][n][m] + 1;
      queue.push([nh, nn, nm]);
    }
  }
}

let answer = 0;
let isComplete = true;

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (arr[h][n][m] === 0) {
        isComplete = false;
      }
      answer = Math.max(answer, arr[h][n][m]);
    }
  }
}

console.log(isComplete ? answer - 1 : -1);
