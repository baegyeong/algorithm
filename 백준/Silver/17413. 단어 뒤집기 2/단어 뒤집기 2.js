const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split("");

let isTag = false;
let word = "";
let answer = "";

for (let s of input) {
  if (s === "<") {
    isTag = true;
    answer += word.split("").reverse().join("") + s;
    word = "";
  } else if (s === ">") {
    isTag = false;
    answer += word + s;
    word = "";
  } else if (s === " ") {
    answer += (!isTag ? word.split("").reverse().join("") : word) + " ";
    word = "";
  } else {
    word += s;
  }
}

answer += word.split("").reverse().join("");

console.log(answer);
