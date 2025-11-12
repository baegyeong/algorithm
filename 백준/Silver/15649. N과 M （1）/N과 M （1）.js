const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const sequence = [];
const visited = new Array(N).fill(false);

function func(x) {
  if (x === M) {
    console.log(sequence.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      sequence.push(i + 1);
      func(x + 1);
      visited[i] = false;
      sequence.pop();
    }
  }
}

func(0);
