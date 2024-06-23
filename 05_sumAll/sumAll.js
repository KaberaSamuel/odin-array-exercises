const sumAll = function (first, last) {
  if (
    (typeof first === "number") &
    (typeof last === "number") &
    (first > 0) &
    (last > 0)
  ) {
    let sum = 0;
    if (first < last) {
      for (let counter = first; counter <= last; counter++) {
        sum += counter;
      }
      return sum;
    } else {
      for (let counter = first; counter >= last; counter--) {
        sum += counter;
      }
      return sum;
    }
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
