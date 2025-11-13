const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const alphabet = input[1].split(" ").sort();
const answer = [];

const vowel = ["a", "e", "i", "o", "u"];

function dfs(str, index) {
  if (index === C + 1) return;
  if (str.length === L) {
    const vowelLength = str
      .split("")
      .filter((item) => vowel.includes(item)).length;
    if (vowelLength === 0) return;
    if (L - vowelLength < 2) return;

    answer.push(str);
    return;
  }
  dfs(str + alphabet[index], index + 1);
  dfs(str.replace(alphabet[index], ""), index + 1);
}

dfs("", 0);
console.log(answer.join("\n"));
