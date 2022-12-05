const getInput = require('../utils/getInput').getInput;

const input = getInput('day_5/input.txt');

const crates = [
  ['D', 'H', 'N', 'Q', 'T', 'W', 'V', 'B'],
  ['D', 'W', 'B'],
  ['T', 'S', 'Q', 'W', 'J', 'C'],
  ['F', 'J', 'R', 'N', 'Z', 'T', 'P'],
  ['G', 'P', 'V', 'J', 'M', 'S', 'T'],
  ['B', 'W', 'F', 'T', 'N'],
  ['B', 'L', 'D', 'Q', 'F', 'H', 'V', 'N'],
  ['H', 'P', 'F', 'R'],
  ['Z', 'S', 'M', 'B', 'L', 'N', 'P', 'H'],
];

const first = (arr) => arr[0];
const last = (arr) => arr[arr.length - 1];

const regexpDigits = /(\d+)/gm;
function readInput(line) {
  const [stack, previous, next] = line.matchAll(regexpDigits);

  return [stack, previous, next].map(first).map(Number);
}

for (const line of input.split('\n').map(readInput)) {
  const [stack, previous, next] = line;

  const moved = crates[previous - 1].splice(-stack, stack);
  crates[next - 1] = crates[next - 1].concat(moved);
}

console.log(crates.reduce((acc, line) => acc + last(line), ''));
