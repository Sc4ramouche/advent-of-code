const uppercase = String.fromCharCode(
  ...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(
    (i) => i + 'A'.charCodeAt(0)
  )
);
const lowercase = String.fromCharCode(
  ...[...Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()].map(
    (i) => i + 'a'.charCodeAt(0)
  )
);

module.exports = {
  uppercase,
  lowercase,
};
