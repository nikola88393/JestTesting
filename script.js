function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  divide: (x, y) => {
    return x / y;
  },
  multiply: (x, y) => {
    return x * y;
  },
};
function cipher(string, factor) {
  if (factor > string.length) {
    factor %= string.length;
  }
  return string.slice(factor, string.length).concat(string.slice(0, factor));
}
function caesarCipher(string, factor) {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipheredAlphabetLower = cipher(alphabetLower, factor);
  const cipheredAlphabetUpper = cipher(alphabetUpper, factor);
  let cipheredString = "";
  for (let i = 0; i < string.length; i++) {
    if (alphabetLower.includes(string[i])) {
      cipheredString += cipheredAlphabetLower[alphabetLower.indexOf(string[i])];
    } else if (alphabetUpper.includes(string[i])) {
      cipheredString += cipheredAlphabetUpper[alphabetUpper.indexOf(string[i])];
    } else {
      cipheredString += string[i];
    }
  }

  return cipheredString;
}

function analyzeArray(array) {
  let average = 0;
  let min = array[0];
  let max = array[0];

  array.forEach((element) => {
    average += element;
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  });
  average /= array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };
}

console.log(analyzeArray([1, 2, 3, 4, 5]));
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
