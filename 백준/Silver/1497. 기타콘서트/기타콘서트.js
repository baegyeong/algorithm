const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const [R, C] = input.shift().map(Number);

input = input.map(([name, possible]) => [
  name,
  possible.split("").map((item) => item === "Y"),
]);

let maxSong = 0;
let minGuitar = Infinity;

function dfs(index, current, count) {
  if (index === R) {
    const songCount = current.filter(Boolean).length;

    if (songCount > maxSong) {
      maxSong = songCount;
      minGuitar = count;
    } else if (songCount === maxSong) {
      minGuitar = Math.min(minGuitar, count);
    }
    return;
  }

  const next = [...current];
  for (let i = 0; i < C; i++) {
    if (input[index][1][i]) next[i] = true;
  }

  dfs(index + 1, next, count + 1);
  dfs(index + 1, current, count);
}

dfs(0, Array(C).fill(false), 0);
console.log(maxSong === 0 ? -1 : minGuitar);
