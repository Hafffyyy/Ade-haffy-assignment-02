const assignment = require('./assignment.js');

const { sumOfNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbers && typeof sumOfNumbers === 'function'){
    console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {
  return number % 2 === 0;
});

console.log(even); // 👉️ [2, 4, 6, 8]
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}