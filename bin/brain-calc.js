#!/usr/bin/env node

import _ from 'lodash';
import { whatIsYourName, getNum, getUserAnswer, checkAnswer } from '../src/index.js';

const randomExpression = () => {
    const num1 = getNum();
    const num2 = getNum();
    const operators = ['+', '-', '*'];
    const randomOperator = _.sample(operators);

    //console.log(`Question: ${num1} ${randomOperator} ${num2}`);
    
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
    const maxRound = 3;
    let correctAnswer = 0;

    const name = whatIsYourName();

    console.log('What is the result of the expression?');

    while (correctAnswer < maxRound) {
        const [num1, num2, randomOperator] = randomExpression();

        console.log(`Question: ${num1} ${randomOperator} ${num2}`);

        const expectedAnswer = calculateResult(num1, num2, randomOperator);
        const userAnswer = Number(getUserAnswer());
        const isCorrect = checkAnswer(userAnswer, expectedAnswer);

        if (isCorrect) {
            correctAnswer += 1;
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulation, ${name}!`);
};

brainCalc();