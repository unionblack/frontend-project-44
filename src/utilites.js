// Function for getting random number
// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max));

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const i = getRandomNumber(0, 3);
  return operators[i];
};
