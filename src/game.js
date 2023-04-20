import readlineSync from 'readline-sync';
import greetings from './cli.js';

const game = (task, generateExpression, generateRightAnswer) => {
  const name = greetings();
  console.log(task);
  let i = 0;
  while (i < 3) {
    const expression = generateExpression();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = generateRightAnswer(expression);
    if (answer === rightAnswer) {
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
};

export default game;
