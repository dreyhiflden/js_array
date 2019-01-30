function capitalsFirst(str) {
  let checkCase = char => char === char.toUpperCase() ? 1 : 2;
  let regEx = /[a-z]/i;

  return str
    .split(' ')
    .filter(v => regEx.test(v[0]))
    .sort((a, b) => checkCase(a[0]) - checkCase(b[0]))
    .join(' ');
}

const sortedString = capitalsFirst('hey You, Sort me Already!');
const expectedString = 'You, Sort Already! hey me';

console.assert(
  sortedString === expectedString,
  `Oh no! ${sortedString} not equals ${expectedString}`,
);
