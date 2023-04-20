#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';

function getRightAnswer(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}
const brainEven = () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', generateRandomNum, getRightAnswer);
};

brainEven();
