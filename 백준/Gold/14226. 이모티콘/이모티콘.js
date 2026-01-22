const S = +require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

const visited = Array.from({ length: 1001 }, () => Array(1001).fill(false));
const queue = [[1, 0, 0]];
visited[1][0] = true;

let head = 0;

while (head < queue.length) {
  const [count, clipboard, time] = queue[head++];

  if (count === S) {
    console.log(time);
    break;
  }

  if (!visited[count][count]) {
    visited[count][count] = true;
    queue.push([count, count, time + 1]);
  }

  if (
    clipboard > 0 &&
    count + clipboard <= 1000 &&
    !visited[count + clipboard][clipboard]
  ) {
    visited[count + clipboard][clipboard] = true;
    queue.push([count + clipboard, clipboard, time + 1]);
  }

  if (count > 0 && !visited[count - 1][clipboard]) {
    visited[count - 1][clipboard] = true;
    queue.push([count - 1, clipboard, time + 1]);
  }
}
