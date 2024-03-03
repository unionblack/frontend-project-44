import { getRandomNumber } from './utilites.js';
import runGameLogic from './games-logic.js';

const description = 'What number is missing in the progression?';

const progression = (firstNum, step) => {
  const arr = [];
  const len = 10;
  for (let i = 0; i < len; i += 1) {
    arr.push(firstNum + (i * step));
  }
  arr.splice(getRandomNumber(1, 10), 1, '..');
  return arr.join(' ');
};

const generateRound = () => {
  const first = getRandomNumber(1, 50);
  const d = getRandomNumber(1, 10);
  const question = progression(first, d);
  const correctAnswer = String(d);

  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
