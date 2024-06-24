const convertToCelsius = function (temp) {
  let temporary = ((temp - 32) * 5) / 9;
  temporary = temporary.toFixed(1);
  return Number(temporary);
};

const convertToFahrenheit = function (temp) {
  let temporary = (9 * temp) / 5 + 32;
  temporary = temporary.toFixed(1);
  return Number(temporary);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
