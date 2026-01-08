const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const L = +input[0];
const [ML, MK] = input[1].split(" ").map(Number);
let C = +input[2];
const Z = input.slice(3).map(Number);

let idx = 0;
let useC = 0;
let bombQueue = [];
let head = 0;

while (idx < L) {
  while (head < bombQueue.length && bombQueue[head] <= idx - ML) {
    head++;
    useC--;
  }

  const includeML = Math.min(idx + 1, ML) - useC;
  const attack = MK * includeML;

  if (Z[idx] <= attack) {
    idx++;
  } else if (C > 0) {
    bombQueue.push(idx);
    useC++;

    idx++;
    C--;
  } else {
    console.log("NO");
    return;
  }
}

console.log("YES");
