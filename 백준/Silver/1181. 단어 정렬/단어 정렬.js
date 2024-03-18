let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0]);
let arr = [];
for (let i = 1; i <= num; i++) {
  if (!arr.includes(input[i].split(" ")[0])) arr.push(input[i].split(" ")[0]);
}
arr.sort();

arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
});

let answer = "";
for (let j = 0; j < arr.length; j++) {
  answer += arr[j] + "\n";
}
console.log(answer);
