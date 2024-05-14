const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let dots = input.map((x) => x.split(" ").map(Number)).flatMap((x) => x);

const ccw = (x1, y1, x2, y2, x3, y3) => {
  const eq = x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1);
  return eq === 0 ? "0" : eq > 0 ? "1" : "-1";
};

console.log(ccw(...dots));
