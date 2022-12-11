const getInput = require('../utils/getInput').getInput;

let input = getInput('day_9/input.txt');

const LENGTH = 10;
const ropes = Array(LENGTH)
  .fill(0)
  .map((x) => [x, x]);
const visited = ['0:0'];

const update = (n, m, v) => {
  ropes[n][m] = ropes[n][m] + v;
};
const moves = {
  R: (n) => update(n, 0, 1),
  U: (n) => update(n, 1, 1),
  L: (n) => update(n, 0, -1),
  D: (n) => update(n, 1, -1),
};

console.time('perf');
// so no proud of what comes next
// I shall revisit this one later
for (let line of input.split('\n')) {
  let [direction, steps] = line.split(' ');
  steps = Number(steps);
  move = moves[direction];

  for (let i = 0; i < steps; i++) {
    move(0);

    for (let j = 1; j < LENGTH; j++) {
      const [x_head, y_head] = ropes[j - 1];
      const [x_tail, y_tail] = ropes[j];

      const x_diff = Math.abs(x_head - x_tail);
      const y_diff = Math.abs(y_head - y_tail);
      const total_diff = x_diff + y_diff;

      if (total_diff < 2) continue;

      if (total_diff === 4) {
        const x = (x_head - x_tail) / 2;
        const y = (y_head - y_tail) / 2;
        update(j, 0, x);
        update(j, 1, y);

        if (j === LENGTH - 1) visited.push(`${ropes[j][0]}:${ropes[j][1]}`);
        continue;
      }

      if (total_diff === 3) {
        const x = x_diff === 2 ? (x_head - x_tail) / 2 : x_head - x_tail;
        const y = x_diff === 2 ? y_head - y_tail : (y_head - y_tail) / 2;
        update(j, 0, x);
        update(j, 1, y);

        if (j === LENGTH - 1) visited.push(`${ropes[j][0]}:${ropes[j][1]}`);
        continue;
      }

      // horizontal tail move
      if (x_diff === 2) {
        const x = (x_head - x_tail) / 2;
        update(j, 0, x);
        if (j === LENGTH - 1) visited.push(`${ropes[j][0]}:${ropes[j][1]}`);
        continue;
      }

      // vertical tail move
      if (y_diff === 2) {
        const y = (y_head - y_tail) / 2;
        update(j, 1, y);
        if (j === LENGTH - 1) visited.push(`${ropes[j][0]}:${ropes[j][1]}`);
        continue;
      }
    }
  }
}
console.timeEnd('perf');

// console.log(ropes[0], ropes[LENGTH - 1]);
console.log(new Set(visited).size);
