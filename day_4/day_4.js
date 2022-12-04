const getInput = require('../utils/getInput').getInput;

const input = getInput('day_4/input.txt');

const lines = input.split('\n');
const containing = lines.reduce((acc, line) => {
  let [left, right] = line.split(',');
  [left, right] = [convertRange(left), convertRange(right)];

  const [shorter, longer] = [left, right].sort(sortRangesByLength);
  return doesRangeContain(shorter, longer) ? [...acc, true] : acc;
}, []).length;

console.log(containing);

function sortRangesByLength(a, b) {
  const lengthA = getLength(a);
  const lengthB = getLength(b);

  return lengthA - lengthB;
}

function convertRange(range) {
  return range.split('-').map(Number);
}

function getLength([l, r]) {
  return r - l;
}

function doesRangeContain(shorter, longer) {
  const [l, r] = shorter;
  const [L, R] = longer;

  // part 1 condition
  // if (l >= L && r <= R) {

  // part 2 condition
  if (l <= R && L <= r) {
    return true;
  } else {
    return false;
  }
}
