const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const MAX_ROW = 2;

const [N, K] = input[0].split(" ").map(Number);

const tracks = input.slice(1).map((line) => line.split(""));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
];

function isObstacle(x, y) {
  return tracks[x][y] === "#";
}

function moveTrack() {
  if (isObstacle(0, 0) && isObstacle(1, 0)) return -1;

  const results = [];

  if (!isObstacle(0, 0)) {
    const result = bfs(0);
    if (result) {
      results.push([0, ...result]);
    }
  }

  if (!isObstacle(1, 0)) {
    const result = bfs(1);
    if (result) {
      results.push([1, ...result]);
    }
  }

  if (results.length === 0) return -1;
  results.sort((a, b) => a[2] - b[2]);

  const [startX, lastX, count] = results[0];

  if (startX === lastX) {
    return count * K + (K - 1);
  }

  if (K === 1) {
    return count;
  }

  if (isObstacle(lastX ^ 1, N - 1) && isObstacle(startX ^ 1, 0)) {
    return -1;
  }

  return count * K + (K - 1) * 2;
}

function bfs(startX) {
  const visited = Array.from({ length: MAX_ROW }, () => Array(N).fill(false));
  const queue = [[startX, 0, 0]];

  visited[startX][0] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (y === N - 1) {
      return [x, dist];
    }

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= MAX_ROW || ny < 0 || ny >= N) continue;
      if (isObstacle(nx, ny) || visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);
    }
  }

  return null;
}

console.log(moveTrack());
