const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [l, c] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").sort();

let answer = [];

let isVowels = (x) =>
  x === "a" || x === "e" || x === "i" || x === "o" || x === "u";

function back(str, depth) {
  if (str.length === l) {
    let vowels = str.split("").filter((x) => isVowels(x)).length;
    let consonants = l - vowels;

    if (consonants > 1 && vowels > 0) answer.push(str);
    return;
  } else {
    for (let i = depth + 1; i < c; i++) {
      back(str + arr[i], i);
    }
  }
}

back("", -1);
console.log(answer.join("\n"));
