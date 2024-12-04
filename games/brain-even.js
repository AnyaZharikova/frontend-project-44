import runGame from '../src/index.js';
import { getNum } from '../src/utils.js';

const isEven = (num) => num % 2 === 0;

const getExpectedAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRoundData = () => {
    const num = getNum();
    const expectedAnswer = getExpectedAnswer(num);
    return [num, expectedAnswer];
  };

  runGame(description, getRoundData);
};

export default brainEven;
