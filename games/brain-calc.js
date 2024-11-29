#!/usr/bin/env node

import _ from 'lodash';
import { getNum, runGame } from '../src/index.js';

const randomExpression = () => {
  const num1 = getNum();
  const num2 = getNum();
  const operators = ['+', '-', '*'];
  const randomOperator = _.sample(operators);

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
      expectedAnswer = null;
  }

  return expectedAnswer;
};

const brainCalc = () => {
  const description = 'What is the result of the expression?';

  const getRoundData = () => {
    const [num1, num2, randomOperator] = randomExpression();
    const question = `${num1} ${randomOperator} ${num2}`;
    const expectedAnswer = calculateResult(num1, num2, randomOperator);
    return [question, expectedAnswer.toString()];
  };

  runGame(description, getRoundData);
};

brainCalc();
