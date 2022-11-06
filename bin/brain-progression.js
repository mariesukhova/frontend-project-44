#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gsd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const randomNumber1 = Math.round(Math.random() * 5);
    const randomNumber2 = Math.round(Math.random() * 10) + randomNumber1;
    const randomNumber3 = Math.round(Math.random() * 10) + 5;
    const randomNumber4 = Math.round(Math.random() * randomNumber3) + 1;

    const getAP = (first, second, APLength) => {
      const arrayAP = [];
      const diff = second - first;
      arrayAP[0] = first;
      for (let j = 1; j < APLength; j += 1) {
        const next = arrayAP[j - 1] + diff;
        arrayAP.push(next);
      }
      return arrayAP;
    };
    const AP = getAP(randomNumber1, randomNumber2, randomNumber3);
    const cover = AP[randomNumber4-1];
    AP[randomNumber4-1] = '..';
    console.log(`Question: ${AP}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(cover)) {
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else if (answer !== cover) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${cover}'.\nLet's try again, ${name}`,
      );
      break;
    }
  }
};
gsd();
