const palindromes = function (str) {
   let lowStr = str.toLowerCase();
   let arr = []
   let newstr = '';
   for (let i = 0; i < lowStr.length; i++) {
      if (lowStr[i].match(/[a-z]/)) {
         // arr.push(lowStr[i])
         newstr += lowStr[i]
      }
   }

   for (let i = 0; i < newstr.length / 2; i++) {
      (newstr[i] === newstr[newstr.length - (1 + i)])
   }
};

// Do not edit below this line
module.exports = palindromes;
