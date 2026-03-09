const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, K, M], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const hypertube = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  for (const station of input[i]) {
    hypertube[station].push(i);
  }
}

const queue = [[1, 1]];
visited[1] = true;

let head = 0;

while (head < queue.length) {
  const [station, count] = queue[head++];

  if (station === N) {
    console.log(count);
    return;
  }

  for (const hyper of hypertube[station]) {
    for (const next of input[hyper]) {
      if (visited[next]) continue;

      visited[next] = true;
      queue.push([next, count + 1]);
    }
  }
}

console.log(-1);
