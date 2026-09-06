function isEven(number) {
  if (typeof number !== 'number' || !Number.isFinite(number)) {
    throw new Error('isEven requires a valid number.');
  }

  return number % 2 === 0;
}

module.exports = isEven;
