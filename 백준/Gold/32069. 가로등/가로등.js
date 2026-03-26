const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const lines = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [L, N, K] = lines[0].split(" ").map(BigInt);
const input = lines[1].split(" ").map(BigInt);

const queue = [];
const result = [];
const visited = new Set();
let head = 0;
let remaining = K;

for (const x of input) {
  queue.push([x, 0n]);
  visited.add(x);
}

while (head < queue.length) {
  const [target, dist] = queue[head++];

  result.push(dist);
  remaining--;

  if (remaining === 0n) break;

  for (const dx of [-1n, 1n]) {
    const nx = target + dx;

    if (nx >= 0n && nx <= L && !visited.has(nx)) {
      visited.add(nx);
      queue.push([nx, dist + 1n]);
    }
  }
}

console.log(result.join("\n"));