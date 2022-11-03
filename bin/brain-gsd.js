import readlineSync from 'readline-sync';

const gsd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers');

  let i = 0;
  while (i < 3) {
    const randomNumber1 = Math.round(Math.random() * 20);
    const randomNumber2 = Math.round(Math.random() * 20);
    const expression = (`${randomNumber1} ${randomNumber2}`);

    function getGsdTwoNumbers() {
      let x = randomNumber1;
      let y = randomNumber2;
      while (y) {
        const t = y;
        y = x % y;
        x = t;
      }
      return x;
    } 

    const gcdTwoNumbers = getGsdTwoNumbers();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer == gcdTwoNumbers) {
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log('Correct!');
      }
    } else if (answer !== gcdTwoNumbers) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${gcdTwoNumbers}'.\nLet's try again, ${name}`,
      );
      break;
    }
  }
};
gsd();
