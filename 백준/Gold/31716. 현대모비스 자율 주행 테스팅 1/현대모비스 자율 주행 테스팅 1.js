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

let node;

function findStartPosition() {
  if (
    (tracks[0][0] === "#" && tracks[1][0] === "#") ||
    (tracks[0][N - 1] === "#" && tracks[1][N - 1] === "#")
  )
    return false;

  if (tracks[0][0] === "#") {
    node = bfs([[1, 0, 0]]);
    return [1, 0];
  }
  if (tracks[1][0] === "#") {
    node = bfs([[0, 0, 0]]);
    return [0, 0];
  }

  const first = bfs([[0, 0, 0]]);
  const second = bfs([[1, 0, 0]]);

  if (first[2] > second[2]) {
    node = second;
    return [1, 0];
  } else {
    node = first;
    return [0, 0];
  }
}

function isObstacle(x, y) {
  return tracks[x][y] === "#";
}

function moveTrack() {
  const start = findStartPosition();
  if (!start) return -1;

  const [startX, startY] = start;

  if (!node) return -1;
  const [lastX, lastY, count] = node;

  if (startX === lastX) {
    return count * K + (K - 1);
  }

  if (K === 1) {
    return count;
  }

  if (isObstacle(lastX ^ 1, lastY) && isObstacle(startX ^ 1, startY)) {
    return -1;
  }

  return count * K + (K - 1) * 2;
}

function bfs(queue) {
  const visited = Array.from({ length: MAX_ROW }, () => Array(N).fill(false));

  const [startX, startY] = queue[0];
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (y === N - 1) {
      return [x, y, count];
    }

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= MAX_ROW || ny < 0 || ny >= N) continue;
      if (isObstacle(nx, ny) || visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, count + 1]);
    }
  }

  return false;
}

console.log(moveTrack());
