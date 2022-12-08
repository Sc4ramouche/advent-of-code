const getInput = require('../utils/getInput').getInput;

let input = getInput('day_8/input.txt');

let forest = [];

for (let line of input.split('\n')) {
  forest.push(line.split('').map(Number));
}

const scores = [];

for (let i = 1; i < forest.length - 1; i++) {
  for (let j = 1; j < forest.length - 1; j++) {
    const tree = forest[i][j];

    let [top, left, bottom, right] = [0, 0, 0, 0];

    for (let k = i - 1; k >= 0; k--) {
      const linedTree = forest[k][j];
      top++;
      if (linedTree >= tree) {
        break;
      }
    }

    for (let k = j - 1; k >= 0; k--) {
      const linedTree = forest[i][k];
      left++;
      if (linedTree >= tree) {
        break;
      }
    }

    for (let k = i + 1; k < forest.length; k++) {
      const linedTree = forest[k][j];
      bottom++;
      if (linedTree >= tree) {
        break;
      }
    }

    for (let k = j + 1; k < forest.length; k++) {
      const linedTree = forest[i][k];
      right++;
      if (linedTree >= tree) {
        break;
      }
    }

    scores.push(top * left * bottom * right);
  }
}

console.log(Math.max(...scores));
