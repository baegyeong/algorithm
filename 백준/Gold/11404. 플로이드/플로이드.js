const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const city = Number(input[0]);
const bus = Number(input[1]);

let graph = [new Array(city + 1).fill(Infinity)];
for (let i = 1; i <= city; i++) {
  graph.push(new Array(city + 1).fill(Infinity));
  graph[i][i] = 0;
}

for (let i = 2; i <= bus + 1; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
}

for (let k = 1; k <= city; k++) {
  for (let a = 1; a <= city; a++) {
    for (let b = 1; b <= city; b++) {
      let cost = graph[a][k] + graph[k][b];
      if (graph[a][b] > cost) {
        graph[a][b] = cost;
      }
    }
  }
}

for (let a = 1; a <= city; a++) {
  let line = "";
  for (let b = 1; b <= city; b++) {
    if (graph[a][b] === Infinity) line += "0 ";
    else line += graph[a][b] + " ";
  }
  console.log(line);
}
