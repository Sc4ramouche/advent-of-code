const getInput = require('../utils/getInput').getInput;

let input = getInput('day_8/input.txt');

let forest = [];

for (let line of input.split('\n')) {
  forest.push(line.split('').map(Number));
}

let counter = 0;

for (let i = 1; i < forest.length - 1; i++) {
  for (let j = 1; j < forest.length - 1; j++) {
    const tree = forest[i][j];

    let [top, left, bottom, right] = [true, true, true, true];

    for (let k = 0; k < i; k++) {
      const linedTree = forest[k][j];
      if (linedTree >= tree) {
        top = false;
        break;
      }
    }
    if (top) {
      counter++;
      continue;
    }

    for (let k = 0; k < j; k++) {
      const linedTree = forest[i][k];
      if (linedTree >= tree) {
        left = false;
        break;
      }
    }
    if (left) {
      counter++;
      continue;
    }

    for (let k = i + 1; k < forest.length; k++) {
      const linedTree = forest[k][j];
      if (linedTree >= tree) {
        bottom = false;
        break;
      }
    }
    if (bottom) {
      counter++;
      continue;
    }

    for (let k = j + 1; k < forest.length; k++) {
      const linedTree = forest[i][k];
      if (linedTree >= tree) {
        right = false;
        break;
      }
    }
    if (right) {
      counter++;
      continue;
    }
  }
}

const p = (forest.length - 1) * 4;
console.log(counter + p);
