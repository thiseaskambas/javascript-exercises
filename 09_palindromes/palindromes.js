



const palindromes = function (str) {
   let lowStr = str.toLowerCase();

   let newstr = '';
   for (let i = 0; i < lowStr.length; i++) {
      if (lowStr[i].match(/[a-z]/)) {
         newstr += lowStr[i]
      }
   }

   let last = newstr.length - 1;
   let result = 0;
   for (let i = 0; i < newstr.length / 2; i++) {
      if (newstr[i] !== newstr[last - i]) {
         result++
      }
   }
   if (result > 0) {
      return false
   } else {
      return true
   }
};


/* 
//MUCH CLEANER SOLUTION:

const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/

// Do not edit below this line
module.exports = palindromes;
