import { getRandomNumber } from './utilites.js';
import runGameLogic from './games-logic.js';

const description = 'What number is missing in the progression?';

const len = 10;

const progression = (firstNum, step) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(firstNum + (i * step));
  }
  return arr;
};

const generateRound = () => {
  const first = getRandomNumber(1, 50);
  const d = getRandomNumber(1, 10);
  const resultProgression = progression(first, d);
  const hiddenIndex = getRandomNumber(0, resultProgression.length - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');

  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
