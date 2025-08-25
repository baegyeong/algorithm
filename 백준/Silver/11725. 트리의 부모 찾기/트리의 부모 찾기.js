const fs = require("fs");
const [N, ...arr] = fs.readFileSync(0, 'utf-8').trim().split("\n");

const tree = Array.from({ length: +N + 1 }, () => []);
const answer = Array.from({ length: +N + 1 });

arr.forEach((item) => {
  const [a, b] = item.split(" ").map(Number);
  tree[a].push(b);
  tree[b].push(a);
});

const queue = [1];
const visited = Array.from({ length: +N + 1 }, () => false);
visited[1] = true;

while (queue.length) {
  const value = queue.shift();
  for (const x of tree[value]) {
    if (!visited[x]) {
      visited[x] = true;
      answer[x] = value;
      queue.push(x);
    }
  }
}

console.log(answer.filter((item) => item).join("\n"));
