function iqTest(number){
    numbers =[]
     number.split(' ').map(n => {
        numbers.push(parseInt(n))
    })
    evenList = []
    oddList = []
    numbers.forEach(num => {
        isEven(num)? evenList.push(numbers.indexOf(num)+1): oddList.push(numbers.indexOf(num)+1)
    });
    return ((evenList.length > oddList.length)? oddList[0] : evenList[0])
}

function isEven(number){
    return number%2===0? true:false
}


console.log(iqTest("2 4 7 8 10"))
// => 3 // Third number is odd, while the rest of the numbers are even

console.log(iqTest("1 2 1 1"))
// => 2 // Second number is even, while the rest of the numbers are odd

console.log(iqTest("88 96 66 51 14 88 2 92 18 72 18 88 20 30 4 82 90 100 24 46"))
// => 4 // fourth number is odd, while the rest of the numbers are even
