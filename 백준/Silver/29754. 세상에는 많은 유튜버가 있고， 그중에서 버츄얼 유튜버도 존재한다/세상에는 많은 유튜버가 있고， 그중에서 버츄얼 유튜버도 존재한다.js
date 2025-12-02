const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const MINUTES_PER_HOUR = 60;
const MIN_BROADCASTS = 5;
const MIN_TIME = 60;
const DAYS_PER_WEEK = 7;

const [N, M] = input[0].split(" ").map(Number);
const broadcasts = input
  .slice(1)
  .map((item) => item.split(" "))
  .sort((a, b) => +a[1] - +b[1]);

const totalWeek = M / DAYS_PER_WEEK;
const youtuber = {};
const result = new Set();

for (const b of broadcasts) {
  const [name, day, start, end] = b;
  const curWeek = Math.floor((+day - 1) / DAYS_PER_WEEK);

  if (!youtuber[name]) {
    youtuber[name] = { count: 0, time: 0, week: totalWeek, curWeek };
  }

  if (youtuber[name].curWeek !== curWeek) {
    youtuber[name] = {
      ...youtuber[name],
      count: 0,
      time: 0,
      curWeek,
    };
  }

  youtuber[name].count++;

  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const broadcastHour = (endHour - startHour) * MINUTES_PER_HOUR;
  const broadcastMinute = endMinute - startMinute;
  youtuber[name].time += broadcastHour + broadcastMinute;

  if (
    youtuber[name].count >= MIN_BROADCASTS &&
    youtuber[name].time >= MIN_TIME * MINUTES_PER_HOUR
  ) {
    youtuber[name].week--;
    youtuber[name].count = 0;
    youtuber[name].time = 0;
  }
}

Object.entries(youtuber).forEach(([key, value]) => {
  if (value.week === 0) {
    result.add(key);
  }
});

const answer = [...result].sort();
console.log(answer.length ? answer.join("\n") : -1);
