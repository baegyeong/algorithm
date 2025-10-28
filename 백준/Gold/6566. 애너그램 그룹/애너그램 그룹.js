const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const anagram = {};

const sortWord = (word) => word.split("").sort();

for (const word of input) {
  const sortedWord = sortWord(word);

  if (!anagram[sortedWord]) {
    anagram[sortedWord] = [word];
  } else {
    anagram[sortedWord].push(word);
  }
}

const anagramValue = Object.values(anagram).map((word) =>
  word.sort((prev, next) => prev.localeCompare(next))
);

anagramValue.sort((a, b) => {
  if (a.length === b.length) {
    return a[0].localeCompare(b[0]);
  }
  return b.length - a.length;
});

const answer = anagramValue.slice(0, 5).reduce((total, item) => {
  const removeDuplicate = [...new Set(item)].join(" ");
  return total + `Group of size ${item.length}: ${removeDuplicate} .\n`;
}, "");

console.log(answer.trim());
