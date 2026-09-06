const crypto = require('crypto');
const numberOfRolls = 5;

for (let rollNumber = 1; rollNumber <= numberOfRolls; rollNumber += 1) {
  const randomByte = crypto.randomBytes(1)[0];
  const diceValue = (randomByte % 6) + 1;
  console.log(`Dice Rolled: ${diceValue}`);
}
