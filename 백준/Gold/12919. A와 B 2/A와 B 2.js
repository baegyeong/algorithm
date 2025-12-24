const [S, T] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

function dfs(cur) {
  if (cur.length < S.length) return;
  if (cur === S) {
    answer = 1;
    return;
  }

  if (cur[cur.length - 1] === "A") {
    dfs(cur.slice(0, -1));
  }

  if (cur[0] === "B") {
    const reversed = cur.slice(1).split("").reverse().join("");
    dfs(reversed);
  }
}

dfs(T);
console.log(answer);
