/**
 *
 * @param {a number to be computed} numbers
 * @returns persistent bugger
 */
function persistence(numbers) {
  numbers = numberToArray(numbers);
  numbers.length > 1 ? (iterable = true) : (iterable = false);
  count = 0;
  while (iterable) {
    count++;
    numbers = multiply(numbers);
    numbers = numberToArray(numbers);
    numbers.length > 1 ? (iterable = true) : (iterable = false);
  }
  return count;
}
// multiplying the elements of the array of numbers
function multiply(numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}
// converting a number like 95 to an array [9,5]
function numberToArray(numbers) {
  return Array.from(String(numbers), Number);
}

console.log(persistence(39));
// === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

console.log(persistence(999));
//  === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

console.log(persistence(4));
//  === 0 // because 4 is already a one-digit number
