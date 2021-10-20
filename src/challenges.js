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
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let highNumber = array[0];
  let repeatNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highNumber) {
      highNumber = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == highNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
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
