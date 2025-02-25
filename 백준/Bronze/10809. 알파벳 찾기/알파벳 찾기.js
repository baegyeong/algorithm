const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split("");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const arr = [];

for (const x of alphabet) {
  arr.push(input.indexOf(x));
}

console.log(arr.join(" "));
