const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let arr = Array.from({ length: 5000000 }, (_, i) => i + 1);
arr = arr.filter((x) => x.toString().includes(666));
console.log(arr[input - 1]);
