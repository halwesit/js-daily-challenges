function digPow(n, p){
    const arrayOfDigits = Array.from(String(n), Number);
    let counter = []
    let res = 0
    let iterator = p
    let total = 0
    arrayOfDigits.forEach(num => {
      counter.push(Math.pow(num, iterator))
      iterator++
    });
  
    counter.forEach(digit => {
       total = digit + total
    });
    res = total/n
    return isFloat(res) ? -1 : res
  }
  
  function isFloat(n){
      return Number(n) === n && n % 1 !== 0;
  }
  
  console.log(digPow(46288, 3)) 
  // should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  console.log(digPow(92, 1)) 
  // should return 1 since 8¹ + 9² = 89 = 89 * 1
  