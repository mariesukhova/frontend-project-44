#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';

function isPrime(num1) {
  if (num1 === 1 || num1 === 0) {
    return false;
  } if (num1 > 1) {
    for (let j = 2; j < num1; j += 1) {
      if (num1 % j === 0) {
        return false;
      }
    }
  }
  return true;
}
function generateExpression() {
  const randomNumber1 = generateRandomNum(20);
  return `${randomNumber1}`;
}
function generateRightAnswer(expression) {
  const randomNumber1 = (+expression);
  const prime = isPrime(randomNumber1);
  return prime ? 'yes' : 'no';
}

const brainPrime = () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', generateExpression, generateRightAnswer);
};
brainPrime();
