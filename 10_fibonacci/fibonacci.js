const fibonacci = function (num) {
   if (num < 0) {
      return 'OOPS'
   }
   let arr = [1, 1];
   let next = 0;

   for (let i = 1; i <= num; i++) {
      next = arr[i] + arr[i - 1];
      arr.push(next)
   }
   return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
