#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';

function getGcdTwoNumbers(num1, num2) {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else b %= a;
  }

  return (+a) + +b;
}
function generateExpression() {
  const randomNumber1 = generateRandomNum(20) + 1;
  const randomNumber2 = generateRandomNum(20) + 1;
  return (`${randomNumber1} ${randomNumber2}`);
}
function generateRightAnswer(expression) {
  const [randomNumber1, randomNumber2] = expression.split(' ');
  const gcdTwoNumbers = getGcdTwoNumbers(randomNumber1, randomNumber2);
  return gcdTwoNumbers.toString();
}
const brainGcd = () => {
  game('Find the greatest common divisor of given numbers', generateExpression, generateRightAnswer);
};
brainGcd();
