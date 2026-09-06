const isEven = require('./isEven');

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log("A:", isEven(a));
console.log("B:", isEven(b));
