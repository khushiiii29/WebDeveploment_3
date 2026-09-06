const isEven = require('./isEven');

console.log('Testing Custom Module');

const numbersToTest = [10, 7, 24, 15];

numbersToTest.forEach((number) => {
  const result = isEven(number) ? 'Even' : 'Odd';
  console.log(`${number} is ${result}`);
});

console.log('Module testing completed');
