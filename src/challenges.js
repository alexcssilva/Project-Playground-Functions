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
    if (array[i] === highNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceNext = 'os gatos trombam e o rato foge';
  let distanceCat1 = mouse - cat1;
  distanceCat1 = Math.abs(distanceCat1);
  let distanceCat2 = mouse - cat2;
  distanceCat2 = Math.abs(distanceCat2);

  if (distanceCat1 < distanceCat2) {
    distanceNext = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    distanceNext = 'cat2';
  }
  return distanceNext;
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  let text = '';

  for (const number of arrayNumber) {
      text = 'bug!';
    if (number % 3 === 0 && number % 5 === 0) {
      text = 'fizzBuzz';
    } else if (number % 5 === 0) {
      text = 'buzz';
    } else if (number % 3 === 0) {
      text = 'fizz';
    }
    arrayString.push(text);
  }
  return arrayString;
}

// Desafio 9
function encode(phrase) {
  let vowelsIndex = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of phrase) {
    if (vowels.includes(letter)) {
      vowelsIndex = vowels.indexOf(letter);
      vowelsIndex += 1;
      phrase = phrase.replace(letter, vowelsIndex);
    }
  }
  return phrase;
}

function decode(phrase) {
  let vowelsIndex = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of phrase) {
    if (letter <= vowels.length && letter > 0) {
      vowelsIndex = letter;
      vowelsIndex -= 1;
      phrase = phrase.replace(letter, vowels[vowelsIndex]);
    }
  }
  return phrase;
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
