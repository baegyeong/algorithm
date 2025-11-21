const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ladder = [];
const snake = [];

for (let i = 1; i <= N; i++) {
  ladder.push(input[i].split(" ").map(Number));
}

for (let i = N + 1; i < N + M + 1; i++) {
  snake.push(input[i].split(" ").map(Number));
}

const visited = Array(101).fill(0);
const dice = [1, 2, 3, 4, 5, 6];
const queue = [1];

while (queue.length) {
  const node = queue.shift();

  if (node === 100) break;

  for (const d of dice) {
    const next = node + d;

    const target =
      ladder.find((x) => x[0] === next)?.[1] ||
      snake.find((x) => x[0] === next)?.[1] ||
      next;

    if (target > 100 || visited[target]) continue;

    visited[target] += visited[node] + 1;
    queue.push(target);
  }
}

console.log(visited[100]);
