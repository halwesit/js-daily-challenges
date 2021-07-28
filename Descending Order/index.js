function descendingOrder(n){
    const arrayOfDigits = Array.from(String(n), Number);
    let descendingNumbers = arrayOfDigits.sort((a, b) => b - a)
    return parseInt(descendingNumbers.join(''))
}

console.log(descendingOrder(42145))
// -> 54421

console.log(descendingOrder(145263))
// -> 654321