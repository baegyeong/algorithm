const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').trim().split("\n")[0];

const quack = ["q", "u", "a", "c", "k"];
const count = [[]];
let answer = 0;

if (input.length % 5 !== 0) {
  console.log(-1);
  return;
}

for (let i = 0; i < input.length; i++) {
  let flag = false;
  for (let j = 0; j < count.length; j++) {
    if (quack[count[j].length % quack.length] === input[i]) {
      count[j].push(input[i]);
      flag = true;
      break;
    }
  }
  if (!flag) {
    count.push([input[i]]);
  }
}

for (let i = 0; i < count.length; i++) {
  if (count[i].length % 5 === 0) {
    answer += 1;
  } else {
    answer = -1;
    break;
  }
}

console.log(answer);
