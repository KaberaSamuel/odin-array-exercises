// My Solution
const removeFromArray = function (array, ...removables) {
  const array2 = [];
  for (let item of array) {
    if (!removables.includes(item)) {
      array2.push(item);
    }
  }

  return array2;
};

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7], 1, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
