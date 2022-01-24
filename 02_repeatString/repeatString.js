








const repeatString = function (str, reps) {
   if (reps < 0) {
      return 'ERROR'
   } else {
      let newStr = ''
      for (let i = 0; i < reps; i++) {
         newStr += str
      }
      return newStr
   }
};

// Do not edit below this line
module.exports = repeatString;
