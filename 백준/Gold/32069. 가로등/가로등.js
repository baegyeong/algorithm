const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[L, N, K], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);

const queue = [];
const result = [];
const visited = new Set();
let head = 0;
let remaining = K;

for (const x of input) {
  queue.push([x, 0]);
  visited.add(x);
}

while (head < queue.length) {
  const [target, dist] = queue[head++];

  result.push(dist);
  remaining--;

  if (remaining === 0) break;

  for (const dx of [-1, 1]) {
    const nx = target + dx;

    if (nx >= 0 && nx <= L && !visited.has(nx)) {
      visited.add(nx);
      queue.push([nx, dist + 1]);
    }
  }
}

console.log(result.join("\n"));
