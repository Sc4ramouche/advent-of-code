const getInput = require('../utils/getInput').getInput;

let input = getInput('day_9/input.txt');

const add = (a, b) => a + b;
const deduct = (a, b) => a - b;

let [x_head, y_head] = [0, 0];
let [x_tail, y_tail] = [0, 0];

const moves = {
  R: (k) => (x_head = add(x_head, k)),
  U: (k) => (y_head = add(y_head, k)),
  L: (k) => (x_head = deduct(x_head, k)),
  D: (k) => (y_head = deduct(y_head, k)),
};
const tailMoves = {
  R: (k) => (x_tail = add(x_tail, k)),
  U: (k) => (y_tail = add(y_tail, k)),
  L: (k) => (x_tail = deduct(x_tail, k)),
  D: (k) => (y_tail = deduct(y_tail, k)),
};

const visited = ['0:0'];

for (let line of input.split('\n')) {
  let [direction, steps] = line.split(' ');
  steps = Number(steps);
  move = moves[direction];

  for (let i = 0; i < steps; i++) {
    move(1);
    const x_diff = Math.abs(x_head - x_tail);
    const y_diff = Math.abs(y_head - y_tail);
    const total_diff = x_diff + y_diff;

    // diagonal tail move
    if (total_diff === 3) {
      if (x_diff === 2) {
        const tailMove = tailMoves[direction];
        tailMove(1);
        y_tail = y_head;
        visited.push(`${x_tail}:${y_tail}`);
      } else {
        const tailMove = tailMoves[direction];
        tailMove(1);
        x_tail = x_head;
        visited.push(`${x_tail}:${y_tail}`);
      }
      continue;
    }

    // horizontal tail move
    if (x_diff === 2) {
      const tailMove = tailMoves[direction];
      tailMove(1);
      visited.push(`${x_tail}:${y_tail}`);
      continue;
    }

    // vertical tail move
    if (y_diff === 2) {
      const tailMove = tailMoves[direction];
      tailMove(1);
      visited.push(`${x_tail}:${y_tail}`);
      continue;
    }
  }
}

console.log(new Set(visited).size);
