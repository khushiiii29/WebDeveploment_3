function runCalculator() {
  
  const operation = process.argv[2];
  const number1 = Number(process.argv[3]);
  const number2 = Number(process.argv[4]);

  let result;
  switch (operation.toLowerCase()) {
    case 'add':
      result = number1 + number2;
      break;
    
      case 'subtract':
      result = number1 - number2;
      break;
    
      case 'multiply':
      result = number1 * number2;
      break;
    
      case 'divide':
      result = number1 / number2;
      break;
    
      default:
      console.log('Error: Invalid operation');
      return;
  }

  console.log(`Result: ${result}`);
}

runCalculator();
