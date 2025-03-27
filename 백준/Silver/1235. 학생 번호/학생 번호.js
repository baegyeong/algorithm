const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
let arr = [];
let k = 1;

while (true) {
  input.forEach((student) => {
    const len = student.length;
    arr.push(student.slice(len - k));
  });

  const temp = new Set([...arr]);

  if (temp.size === arr.length) break;

  k++;
  arr = [];
}

console.log(k);
