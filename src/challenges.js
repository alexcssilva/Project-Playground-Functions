// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  if (base && height) {
    return (base * height) / 2;
  }
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  if (string) {
    array = string.split(' ');
    return array;
  }
}

// Desafio 4
function concatName(array) {
  return array[0] + ', ' + array[array.length - 1];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8));
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
