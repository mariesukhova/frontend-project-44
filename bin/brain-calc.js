#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getMathSign() {
  const randomNum = Math.round(Math.random() * 2);

  switch (randomNum) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';

    default:
      return '+';
  }
}

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);

    const mathSign = getMathSign();
    const expression = (`${randomNumber1} ${mathSign} ${randomNumber2}`);
    let result;

    switch (mathSign) {
      case '+':
        result = randomNumber1 + randomNumber2;
        break;
      case '-':
        result = randomNumber1 - randomNumber2;
        break;
      case '*':
        result = randomNumber1 * randomNumber2;
        break;

      default:
        break;
    }
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(result)) {
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else if (answer !== result) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}`,
      );
      break;
    }
  }
};
calc();
