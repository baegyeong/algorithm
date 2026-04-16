const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

let sharkX = -1,
  sharkY = -1;

for (let i = 0; i < N && sharkX === -1; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === 9) {
      sharkX = i;
      sharkY = j;
      break;
    }
  }
}

input[sharkX][sharkY] = 0;

let shark = 2;
let eat = 0;
let totalTime = 0;

while (true) {
  const queue = [];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  queue.push([sharkX, sharkY, 0]);
  visited[sharkX][sharkY] = true;

  const candidates = [];
  let minDist = Infinity;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (dist > minDist) break;

    if (input[x][y] > 0 && input[x][y] < shark) {
      minDist = dist;
      candidates.push([x, y, dist]);
    }

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (visited[nx][ny]) continue;

      if (input[nx][ny] > shark) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);
    }
  }

  if (!candidates.length) break;

  candidates.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const [targetX, targetY, dist] = candidates[0];

  sharkX = targetX;
  sharkY = targetY;
  totalTime += dist;

  input[targetX][targetY] = 0;
  eat++;

  if (shark === eat) {
    shark++;
    eat = 0;
  }
}

console.log(totalTime);
