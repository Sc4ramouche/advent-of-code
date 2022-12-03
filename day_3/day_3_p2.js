const getInput = require('../utils/getInput').getInput;
const { uppercase, lowercase } = require('../utils/alphabet');
const input = getInput('day_3/input.txt');

const priority = [...lowercase, ...uppercase].reduce((acc, letter, index) => {
  return { ...acc, [letter]: index + 1 };
}, {});

const sum = (arr) => arr.reduce((acc, x) => acc + Number(x), 0);

function findCommon(group) {
  const lines = group.split('\n');
  const hash = new Map();
  for (let char of lines[0]) {
    hash.set(char, 1);
  }

  for (let char of lines[1]) {
    const saved = hash.get(char);
    if (saved) {
      hash.set(char, 2);
    }
  }

  for (let char of lines[2]) {
    const saved = hash.get(char);
    if (saved === 2) return char;
  }
}

//stackoverflow.com/a/26459969
const grouped = input.match(/(?:^.*$\n?){1,3}/gm);

const commons = grouped.map(findCommon);
const chars = commons.map((x) => priority[x]);

const result = sum(chars);
console.log(result);
