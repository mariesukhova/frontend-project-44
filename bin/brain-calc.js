#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';
import getMathSign from '../src/getMathSign.js';

function generateExpression() {
  const randomNumber1 = generateRandomNum(100);
  const randomNumber2 = generateRandomNum(100);
  const mathSign = getMathSign();
  return `${randomNumber1} ${mathSign} ${randomNumber2}`;
}
function generateRightAnswer(expression) {
  const [randomNumber1Str, mathSign, randomNumber2Str] = expression.split(' ');
  const [randomNumber1, randomNumber2] = [+randomNumber1Str, +randomNumber2Str];

  switch (mathSign) {
    case '+':
      return `${randomNumber1 + randomNumber2}`;
    case '-':
      return `${randomNumber1 - randomNumber2}`;
    default:
      return `${randomNumber1 * randomNumber2}`;
  }
}
const brainCalc = () => {
  game('What is the result of the expression?', generateExpression, generateRightAnswer);
};
brainCalc();
