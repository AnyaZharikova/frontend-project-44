import runGame from '../src/index.js';
import getNum from '../src/utils.js';

const getOperator = (operators) => {
  const randomIndex = Math.floor(Math.random() * operators.length);

  return operators[randomIndex];
};

const randomExpression = () => {
  const num1 = getNum();
  const num2 = getNum();
  const operators = ['+', '-', '*'];
  const randomOperator = getOperator(operators);

  const expression = [num1, num2, randomOperator];

  return expression;
};

const calculateResult = (num1, num2, randomOperator) => {
  let expectedAnswer;
  switch (randomOperator) {
    case '+':
      expectedAnswer = num1 + num2;
      break;
    case '-':
      expectedAnswer = num1 - num2;
      break;
    case '*':
      expectedAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: '${randomOperator}'! Supported operators are '+', '-', '*'.`);
  }

  return expectedAnswer;
};

const runBrainCalc = () => {
  const description = 'What is the result of the expression?';

  const getRoundData = () => {
    const [num1, num2, randomOperator] = randomExpression();
    const question = `${num1} ${randomOperator} ${num2}`;
    const expectedAnswer = calculateResult(num1, num2, randomOperator);
    return [question, expectedAnswer.toString()];
  };

  runGame(description, getRoundData);
};

export default runBrainCalc;
