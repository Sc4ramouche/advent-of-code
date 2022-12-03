const fs = require('fs');

function getInput(path = 'day_1/input.txt') {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (err) {
    console.error('Failed why reading the input file.');
    throw err;
  }
}

module.exports = {
  getInput,
};
