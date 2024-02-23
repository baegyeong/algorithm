const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let cnt = 0;

while (true) {
  if (b === a) {
    break;
  } else if (b < a) {
    cnt = -1;
    break;
  } else {
    if (b % 2 === 0) {
      b /= 2;
      cnt++;
    } else if (b % 10 === 1) {
      b = Number(b.toString().slice(0, -1));
      cnt++;
    } else {
      cnt = -1;
      break;
    }
  }
}

cnt = cnt > 0 ? cnt + 1 : cnt;
console.log(cnt);
