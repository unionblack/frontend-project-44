import { getRandomNumber } from './utilites.js';
import runGameLogic from './games-logic.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return gcd(num2 % num1, num1);
};

const generateRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const question = (`${a} ${b}`);
  const correctAnswer = String(gcd(a, b));
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
