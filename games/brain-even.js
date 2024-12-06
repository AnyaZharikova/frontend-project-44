import runGame from '../src/index.js';
import getNum from '../src/utils.js';

const isEven = (num) => num % 2 === 0;

const runBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRoundData = () => {
    const num = getNum();
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    return [num, expectedAnswer];
  };

  runGame(description, getRoundData);
};

export default runBrainEven;
