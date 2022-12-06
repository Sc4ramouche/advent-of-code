const getInput = require('../utils/getInput').getInput;

const input = getInput('day_6/input.txt');

const MSG_LENGTH = 14;

for (let i = MSG_LENGTH; i < input.length; i++) {
  const group = input.slice(i - MSG_LENGTH, i);
  const set = new Set(group);

  if (set.size === MSG_LENGTH) {
    console.log(i);
    break;
  }
}
