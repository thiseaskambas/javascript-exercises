

const reverseString = function (str) {
   const temp = Array.from(str);
   let newStr = '';
   for (let i = temp.length - 1; i >= 0; i--) {
      newStr += temp[i]
   }
   return newStr;
};

/* simplier solution would have been as follows :

const reverseString = function(string) {
   return string.split('').reverse().join('')
};
*/

// Do not edit below this line
module.exports = reverseString;
