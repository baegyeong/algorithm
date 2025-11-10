const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const MAX_NUM = 100000;
const visited = Array(MAX_NUM + 1).fill(0);
const queue = [N];

let head = 0;
while (head < queue.length) {
  const node = queue[head++];

  if (node === K) {
    console.log(visited[K]);
    break;
  }

  const directions = [node + 1, node - 1, node * 2];
  for (const x of directions) {
    if (x < 0 || x > MAX_NUM || visited[x]) continue;
    visited[x] = visited[node] + 1;
    queue.push(x);
  }
}
