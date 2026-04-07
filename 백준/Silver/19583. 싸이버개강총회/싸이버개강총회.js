const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [S, E, Q] = input.shift().split(" ");
const member = new Set(input.map((item) => item.split(" ")[1]));
const isVisited = [...member].map((item) => ({ [item]: false }));

function isAttend(target, compare) {
  const [compareH, compareM] = compare.split(":").map(Number);
  const [targetH, targetM] = target.split(":").map(Number);

  if (targetH > compareH) return false;
  if (targetH < compareH) return true;
  if (targetM > compareM) return false;
  return true;
}

const attendance = new Set();
const result = new Set();

for (const chat of input) {
  const [time, nickname] = chat.split(" ");

  if (!isVisited[nickname]) {
    if (isAttend(time, S)) {
      attendance.add(nickname);
    }

    isVisited[nickname] = true;
  }

  if (!attendance.has(nickname)) continue;

  if (isAttend(E, time) && isAttend(time, Q)) {
    result.add(nickname);
  }
}

console.log(result.size);
