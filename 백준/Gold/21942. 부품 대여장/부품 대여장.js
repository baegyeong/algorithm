const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, L, F] = input[0].split(" ");

let member = new Set();
const loanInfo = {};
const fee = {};

for (let i = 1; i < +N; i++) {
  const [, , , M] = input[i].split(" ");
  member.add(M);
}

member = [...member].sort();

for (const x of member) {
  loanInfo[x] = new Map();
}

for (let i = 1; i <= +N; i++) {
  const [date, time, P, M] = input[i].split(" ");

  if (!loanInfo[M].get(P)) {
    loanInfo[M].set(P, [`${date} ${time}`]);
  } else {
    loanInfo[M].get(P).push(`${date} ${time}`);
  }
}

const [dueDays, dueTime] = L.split("/");
const [dueHours, dueMinutes] = dueTime.split(":").map(Number);
const limit = dueDays * 1440 + dueHours * 60 + dueMinutes;

Object.entries(loanInfo).forEach(([name, itemInfo]) => {
  for (const [item, time] of itemInfo.entries()) {
    for (let i = 0; i < time.length; i += 2) {
      const minutes = getTimeDiff(time[i], time[i + 1]);
      const overBalance = minutes - limit;
      if (overBalance > 0) {
        if (!fee[name]) fee[name] = 0;
        fee[name] += overBalance * +F;
      }
    }
  }
});

function getTimeDiff(a, b) {
  const d1 = new Date(a);
  const d2 = new Date(b);
  const diff = d2 - d1;

  return diff / (1000 * 60);
}

if (!Object.keys(fee).length) {
  console.log(-1);
  return;
}

Object.entries(fee).forEach(([key, value]) => {
  console.log(`${key} ${value}`);
});
