const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

let arr = input[1].split(" ");
for (let i = 0; i < num; i++) {
  const length = arr[i].length;
  if (arr[i] === arr[i].split("").reverse().join("")) {
    if (i + 1 < num && arr[i][length - 1] !== arr[i + 1][0]) {
      console.log(0);
      return;
    }
  } else {
    console.log(0);
    return;
  }
}

console.log(1);
