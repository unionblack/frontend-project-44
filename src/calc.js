import runGameLogic from './games-logic.js';
import { getRandomNumber, getRandomOperator } from './utilites.js';

const description = 'What is the result of the expression?';

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return Error('Incorrect operator');
  }
};

const generateRound = () => {
  const numFirst = getRandomNumber(1, 100);
  const numSecond = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = (`${numFirst} ${operator} ${numSecond}`);
  const correctAnswer = String(calculate(operator, numFirst, numSecond));
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
