const checkAlphabet = function (char) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  return alphabets.includes(char);
};

const palindromes = function (input) {
  const input2 = input.toLowerCase();

  let stringOriginal = input2.split("").filter(checkAlphabet).join("");

  let reversedString = input2
    .split("")
    .filter(checkAlphabet)
    .reverse()
    .join("");

  return stringOriginal === reversedString;
};

palindromes("r3ace3car");
// Do not edit below this line
module.exports = palindromes;
