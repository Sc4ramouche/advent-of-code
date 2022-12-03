const getInput = require('../utils/getInput').getInput;
const { uppercase, lowercase } = require('../utils/alphabet');

const input = getInput('day_3/input.txt');

const priority = [...lowercase, ...uppercase].reduce((acc, letter, index) => {
  return { ...acc, [letter]: index + 1 };
}, {});

const sum = (arr) => arr.reduce((acc, x) => acc + Number(x), 0);

const getTwoParts = (s) => {
  const left = s.slice(0, s.length / 2);
  const right = s.slice(s.length / 2);
  return [left, right];
};

const findDuplicate = (left, right) => {
  const hash = new Map();

  for (let char of left) {
    hash.set(char, char);
  }

  for (let char of right) {
    if (hash.get(char)) {
      return char;
    }
  }
};

const duplicates = input
  .split('\n')
  .map((s) => getTwoParts(s))
  .map(([left, right]) => findDuplicate(left, right));

const chars = duplicates.map((x) => priority[x]);
const result = sum(chars);
console.log(result);
