#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';

function getGcdTwoNumbers(num1, num2) {
  let x = num1;
  let y = num2;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
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
