const findTheOldest = function (array) {
   array.sort((first, second) => {
      const ageFirst = (first.yearOfDeath || new Date().getFullYear()) - first.yearOfBirth
      const ageSecond = (second.yearOfDeath || new Date().getFullYear()) - second.yearOfBirth
      return ageSecond > ageFirst ? 1 : -1
   })
   return array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
