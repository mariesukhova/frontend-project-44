#!/usr/bin/env node
import game from '../src/game.js';
import generateRandomNum from '../src/generateRandomNum.js';

function getAP(first, second, APLength) {
  const arrayAP = [];
  const diff = second - first;
  arrayAP[0] = first;
  for (let j = 1; j < APLength; j += 1) {
    const next = arrayAP[j - 1] + diff;
    arrayAP.push(next);
  }
  return arrayAP;
}
function generateExpression() {
  const randomNumber1 = generateRandomNum(5);
  const randomNumber2 = generateRandomNum(10) + randomNumber1;
  const randomNumber3 = generateRandomNum(10) + 8;
  const randomNumber4 = generateRandomNum(1) + 1;
  const AP = getAP(randomNumber1, randomNumber2, randomNumber3);
  AP[randomNumber4 - 1] = '..';
  return AP.join(' ');
}
function generateRightAnswer(expression) {
  const arr = expression.split(' ');
  const missedItemIndex = arr.indexOf('..');
  if (missedItemIndex === 0 || missedItemIndex === 1) {
    const diff = arr[arr.length - 1] - arr[arr.length - 2];
    const missedItem = +arr[missedItemIndex + 1] - (+diff);
    return missedItem.toString();
  }
  if (missedItemIndex === arr[arr.length - 1]) {
    const diff = arr[3] - arr[2];
    const missedItem = +arr[missedItemIndex - 1] + (+diff);
    return missedItem.toString();
  }
  const diff = arr[1] - arr[0];
  const missedItem = +arr[missedItemIndex - 1] + (+diff);
  return missedItem.toString();
}

const brainProgression = () => {
  game('What number is missing in the progression?', generateExpression, generateRightAnswer);
};
brainProgression();
