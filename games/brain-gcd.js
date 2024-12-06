import runGame from '../src/index.js';
import getNum from '../src/utils.js';

const randomNumbers = () => {
  const num1 = getNum();
  const num2 = getNum();

  return [num1, num2];
};

const getGcd = (num1, num2) => {
  let maxNum = Math.max(num1, num2);
  let minNum = Math.min(num1, num2);

  while (minNum !== 0) {
    const remainder = maxNum % minNum;
    maxNum = minNum;
    minNum = remainder;
  }

  const expectedAnswer = maxNum;
  return expectedAnswer;
};

const runBrainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const getRoundData = () => {
    const [num1, num2] = randomNumbers();
    const question = `${num1} ${num2}`;
    const expectedAnswer = getGcd(num1, num2);
    return [question, expectedAnswer.toString()];
  };

  runGame(description, getRoundData);
};

export default runBrainGcd;
