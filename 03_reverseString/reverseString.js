const reverseString = function (string) {
  const array2 = [];
  for (let char of string.split("")) {
    array2.unshift(char);
  }
  return array2.join("");
};

// Do not edit below this line
module.exports = reverseString;
