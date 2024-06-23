const removeFromArray = function (array, removable) {
  if (!array.includes(removable)) return array;
  array.splice(array.indexOf(removable), 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
