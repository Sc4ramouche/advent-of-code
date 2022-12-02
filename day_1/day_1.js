const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const TOP_CARRYING_ELVES = 3;
const sum = (arr) => arr.reduce((acc, x) => acc + x);

const elves = input.split('\n\n');

const calories = elves.map((elf) => {
  const load = elf.split('\n');
  return sum(load.map(Number));
});

const champions = calories.sort().slice(-TOP_CARRYING_ELVES);
console.log(sum(champions));
