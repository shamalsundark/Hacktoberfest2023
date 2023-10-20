const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

const greaterThanThree = numbers.filter(number => number > 3);
console.log(greaterThanThree); // Output: [4, 5, 6]
