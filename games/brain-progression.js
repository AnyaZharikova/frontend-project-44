import runGame from '../src/index.js';
import getNum from '../src/utils.js';

const getProgression = () => {
  const step = getNum(1, 9);
  const firstNum = getNum(0, 20);
  const lengthOfProgression = getNum(5, 10);

  let nextNum = firstNum;
  const arithmeticProgression = [firstNum];

  for (let i = 1; i < lengthOfProgression; i += 1) {
    nextNum += step;
    arithmeticProgression.push(nextNum);
  }

  return arithmeticProgression;
};

const hideNum = () => {
  const arithmeticProgression = getProgression();
  const randomIndex = getNum(0, arithmeticProgression.length - 1);

  const expectedAnswer = arithmeticProgression[randomIndex];

  const hiddenProgression = [...arithmeticProgression];
  hiddenProgression[randomIndex] = '..';
  const question = `${hiddenProgression.join(' ')}`;

  return [question, expectedAnswer];
};

const runBrainProgression = () => {
  const description = 'What number is missing in the progression?';

  const getRoundData = () => {
    const [question, expectedAnswer] = hideNum();
    return [question, expectedAnswer.toString()];
  };

  runGame(description, getRoundData);
};

export default runBrainProgression;
