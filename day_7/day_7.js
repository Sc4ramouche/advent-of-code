const getInput = require('../utils/getInput').getInput;

let input = getInput('day_7/input.txt');

const last = (arr) => arr[arr.length - 1];
const sum = (arr) => arr.reduce((acc, x) => acc + x);

const TOTAL = 70_000_000;
const TARGET = 30_000_000;
const LIMIT = 100_000;

const cdRegexp = /\$ cd (\w+|\/)/;
const exitRegexp = /\$ cd (\.\.)/;
const fileRegexp = /^(\d+)\s.*/;

let dirStack = [];
const hash = new Map();

for (const line of input.split('\n')) {
  if (line.startsWith('$ ls')) continue;
  if (line.startsWith('dir ')) continue;

  const dir = line.match(cdRegexp);
  if (dir) {
    const dirName = dir[1];
    // to ensure names are unique
    if (hash.get(dirName)) {
      const parentDir = last(dirStack) ?? '';
      dirStack = [...dirStack, `${parentDir}/${dirName}`];
    } else {
      dirStack = [...dirStack, dirName];
    }
    continue;
  }

  const exit = line.match(exitRegexp);
  if (exit) {
    const lastDir = dirStack.pop();
    const lastDirSize = hash.get(lastDir) ?? 0;

    const parentDir = last(dirStack);
    const parentDirSize = hash.get(parentDir) ?? 0;

    hash.set(parentDir, parentDirSize + lastDirSize);
    continue;
  }

  const file = line.match(fileRegexp);
  if (file) {
    const fileSize = Number(file[1]);
    const currentDir = last(dirStack);
    const currentDirSize = hash.get(currentDir) ?? 0;

    hash.set(currentDir, currentDirSize + fileSize);
  }
}

while (dirStack.length !== 1) {
  const lastDir = dirStack.pop();
  const lastDirSize = hash.get(lastDir);

  const parentDir = last(dirStack);
  const parentDirSize = hash.get(parentDir);
  hash.set(parentDir, parentDirSize + lastDirSize);
}

// day_1
let result = 0;
for (let size of hash.values()) {
  if (size <= LIMIT) result += size;
}
console.log(result);

// day_2
const total = hash.get('/');
const debt = total - TOTAL;
const target = debt + TARGET;
const arr = [];
for (let size of hash.values()) {
  if (size >= target) arr.push(size);
}
console.log(Math.min(...arr));
