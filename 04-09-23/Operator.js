const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Gib die erste Zahl ein: ', (firstNumber) => {
  rl.question('Gib die zweite Zahl ein: ', (secondNumber) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    console.log('Die Summe der beiden Zahlen ist: ' + sum);
    console.log('Die Differenz der beiden Zahlen ist: ' + difference);
    console.log('Das Produkt der beiden Zahlen ist: ' + product);
    console.log('Der Quotient der beiden Zahlen ist: ' + quotient);

    rl.close();
  });
});