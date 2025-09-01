const fs = require("fs");
const [T, ...input] = fs.readFileSync(0, 'utf-8').trim().split("\n");

const isPalindrome = (word, left, right) => {
  while (left < right) {
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }
  return true;
};

const result = [];

for (let i = 0; i < +T; i++) {
  const word = input[i].trim();
  let start = 0,
    end = word.length - 1;
  let answer = 0;

  while (start < end) {
    if (word[start] === word[end]) {
      start++;
      end--;
    } else {
      if (
        isPalindrome(word, start + 1, end) ||
        isPalindrome(word, start, end - 1)
      ) {
        answer = 1;
      } else {
        answer = 2;
      }
      break;
    }
  }

  result.push(answer);
}

console.log(result.join("\n"));
