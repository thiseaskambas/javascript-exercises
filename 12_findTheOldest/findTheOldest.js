const findTheOldest = function (array) {
   array.sort((first, second) => {
      const ageFirst = (first.yearOfDeath || 2022) - first.yearOfBirth
      const ageSecond = (second.yearOfDeath || 2022) - second.yearOfBirth
      return ageSecond > ageFirst ? 1 : -1
   })
   return array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
