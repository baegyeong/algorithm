const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
input.shift();
let graph = input.map((x) => x.split(" ").map(Number));

for (let k = 0; k < num; k++) {
  for (let a = 0; a < num; a++) {
    for (let b = 0; b < num; b++) {
      if (graph[a][k] && graph[k][b]) graph[a][b] = 1;
    }
  }
}

for (let a = 0; a < num; a++) {
  let line = "";
  for (let b = 0; b < num; b++) {
    if (graph[a][b] === 0) line += "0 ";
    else line += "1 ";
  }
  console.log(line);
}
