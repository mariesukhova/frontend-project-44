#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';

function generateExpression() {
  const randomNumber1 = generateRandomNum(10) + 1;
  return `${randomNumber1}`;
}
function getRightAnswer(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}
const brainEven = () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', generateExpression, getRightAnswer);
};

brainEven();
