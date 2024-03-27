const readline = require("readline");
const input = [];

readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(" ").map((elem) => +elem));
  })
  .on("close", () => {
    solution();
    process.exit();
  });

class DisjointSet {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(1);
  }
  find(u) {
    if (u === this.parent[u]) return u;
    return (this.parent[u] = this.find(this.parent[u]));
  }
  merge(u, v) {
    let _u = this.find(u);
    let _v = this.find(v);
    this.parent[_v] = _u;
  }
}

const solution = () => {
  const [N, M] = input.shift();
  const disjointSet = new DisjointSet(N + 1);

  let res = "";
  for (let iteration = 0; iteration < M; iteration++) {
    const [flag, a, b] = input[iteration];

    if (flag) {
      disjointSet.find(a) === disjointSet.find(b)
        ? (res += "YES\n")
        : (res += "NO\n");
    } else {
      disjointSet.merge(a, b);
    }
  }
  console.log(res);
};
