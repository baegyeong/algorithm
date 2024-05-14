const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
input.shift();

input = input.map((x) => x.split(" "));
const node = input.map((x) => x[0]);

let preOrder = "",
  inOrder = "",
  postOrder = "";
let left = 0,
  right = 0;

const isPreOrder = (n) => {
  if (node.some((x) => x === n[0])) {
    preOrder += n[0];

    for (let i = 0; i < N; i++) {
      if (n[1] === ".") break;
      else if (node[i] === n[1]) {
        left = i;
        isPreOrder(input[left]);
        break;
      }
    }

    for (let i = 0; i < N; i++) {
      if (n[2] === ".") break;
      else if (node[i] === n[2]) {
        right = i;
        isPreOrder(input[right]);
        break;
      }
    }
  }
};

const isInOrder = (n) => {
  if (node.some((x) => x === n[0])) {
    for (let i = 0; i < N; i++) {
      if (n[1] === ".") break;
      else if (node[i] === n[1]) {
        left = i;
        isInOrder(input[left]);
        break;
      }
    }

    inOrder += n[0];

    for (let i = 0; i < N; i++) {
      if (n[2] === ".") break;
      else if (node[i] === n[2]) {
        right = i;
        isInOrder(input[right]);
        break;
      }
    }
  }
};

const isPostOrder = (n) => {
  if (node.some((x) => x === n[0])) {
    for (let i = 0; i < N; i++) {
      if (n[1] === ".") break;
      else if (node[i] === n[1]) {
        left = i;
        isPostOrder(input[left]);
        break;
      }
    }

    for (let i = 0; i < N; i++) {
      if (n[2] === ".") break;
      else if (node[i] === n[2]) {
        right = i;
        isPostOrder(input[right]);
        break;
      }
    }

    postOrder += n[0];
  }
};

isPreOrder(input[0]);
isInOrder(input[0]);
isPostOrder(input[0]);

console.log(`${preOrder}\n${inOrder}\n${postOrder}`);
