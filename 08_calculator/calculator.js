const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let counter = 0;
  for (let num of array) {
    counter += num;
  }
  return counter;
};

const multiply = function (array) {
  let counter = 1;
  for (let num of array) {
    counter *= num;
  }
  return counter;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let product = num;
  for (let counter = num - 1; counter > 1; counter--) {
    product *= counter;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
