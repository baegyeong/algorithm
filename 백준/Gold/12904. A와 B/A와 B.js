const fs = require("fs");
const [S, T] = fs.readFileSync("/dev/stdin").toString().split("\n");

let target = T;

while (target.length > S.length) {
  if (target[target.length - 1] === "A") {
    target = target.slice(0, -1);
  } else {
    target = target.slice(0, -1).split("").reverse().join("");
  }
}

console.log(target === S ? 1 : 0);
