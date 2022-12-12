#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const randomNumber1 = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNumber1}`);
    let isPrime = () => {
      if (randomNumber1 === 1 || randomNumber1 === 0) {
        isPrime = false;
      } else if (randomNumber1 > 1) {
        for (let i = 2; i < randomNumber1; i += 1) {
          if (randomNumber1 % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      return isPrime;
    };
    isPrime();
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isPrime) || (answer === 'no' && !isPrime)) {
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else if (answer === 'yes' && !isPrime) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
      );
      break;
    } else if (answer === 'no' && isPrime) {
      console.log(
        `'no' is wrong answer ;(.\nCorrect answer was 'yes'.\nLet's try again, ${name}!`,
      );
      break;
    } else {
      console.log(
        `Uncorrect answer.\nLet's try again, ${name}!`,
      );
      break;
    }
  }
};
brainPrime();
