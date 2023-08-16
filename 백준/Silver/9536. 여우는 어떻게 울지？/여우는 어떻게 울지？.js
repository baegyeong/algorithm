const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((a) => a.trim());

const main = () => {
  const checkList = input[gi++].split(" ");
  const cand = new Set();
  while (true) {
    const txt = input[gi++];
    if (txt === checkTxt) {
      const res = checkList.filter((txt) => !cand.has(txt));
      console.log(res.join(" "));
      break;
    } else {
      const [who, how] = txt.split(" goes ");
      if (who !== "fox") {
        cand.add(how);
      }
    }
  }
};

let gi = 0;
const checkTxt = "what does the fox say?";
const T = input[gi++];
for (let i = 0; i < T; i++) {
  main();
}