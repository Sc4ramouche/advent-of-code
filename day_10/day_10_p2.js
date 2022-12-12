const getInput = require('../utils/getInput').getInput;

let input = getInput('day_10/input.txt');

const numberRegex = /-?\d+/;

let [i, x, cycle] = [0, 1, 0];
let skip_cycle = true;
let res = '';

const lines = input.split('\n');

while (i < lines.length) {
  if (cycle % 40 === 0) {
    res += '\n';
  }

  res += Math.abs(x - (cycle % 40)) < 2 ? '#' : '.';

  if (lines[i].startsWith('noop')) {
    i++;
  } else if (lines[i].startsWith('addx')) {
    if (!skip_cycle) {
      skip_cycle = true;
      x += Number(lines[i].match(numberRegex)[0]);
      i++;
    } else {
      skip_cycle = false;
    }
  }

  cycle++;
}

console.log(res);
