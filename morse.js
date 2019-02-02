let object = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

let transformToMorse = (word) => {
  return word
    .split('')
    .reduce((acc, cur) => acc + object[cur], '');
};

let uniqueMorseRepresentations = function(words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    arr.push(transformToMorse(words[i]));
  }

  return arr.filter((v, i) => arr.indexOf(v) === i).length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
