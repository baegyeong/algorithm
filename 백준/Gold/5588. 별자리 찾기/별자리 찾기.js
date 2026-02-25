const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const m = input.shift()[0];
const starSign = input.splice(0, m);
const n = input.shift()[0];
const photo = input;
let answer;

for (let i = 0; i < m; i++) {
  const [x1, y1] = starSign[i];

  for (let j = 0; j < n; j++) {
    const [x2, y2] = photo[j];

    const dx = x2 - x1;
    const dy = y2 - y1;

    const isInclude = starSign.every(([x, y]) =>
      photo.some(([px, py]) => px === x + dx && py === y + dy),
    );

    if (isInclude) {
      answer = [dx, dy];
      break;
    }
  }

  if (answer) break;
}

console.log(answer.join(" "));
