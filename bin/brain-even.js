#!/usr/bin/env node
import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const randomNumber = Math.round(Math.random() * 10);
    const isEven = randomNumber % 2 === 0;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`
        );
      } else {
        console.log('Correct!');
      }
    } else if (answer === 'yes' && !isEven) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
      );
      break;
    } else if (answer === 'no' && isEven) {
      console.log(
        `'no' is wrong answer ;(.\nCorrect answer was 'yes'.\nLet's try again, ${name}!`,
      );
      break;
    } else {
      console.log(
        `${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
      );
      break;
    }
  }
};

game();
