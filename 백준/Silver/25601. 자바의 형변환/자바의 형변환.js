const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const classInput = input
  .slice(1, input.length - 1)
  .map((item) => item.split(" "));

const classParent = new Map();

for (const [A, B] of classInput) {
  let child = classParent.get(B);
  if (child) {
    child.add(A);
  } else {
    child = new Set([A]);
  }
  classParent.set(B, child);
}

const [A, B] = input[input.length - 1].split(" ");

const findRelationship = (target, next) => {
  if (!classParent.has(next)) {
    return false;
  }

  if (classParent.get(next).has(target)) {
    return true;
  }

  for (const child of classParent.get(next)) {
    if (findRelationship(target, child)) {
      return true;
    }
  }

  return false;
};

console.log(findRelationship(A, B) | findRelationship(B, A));
