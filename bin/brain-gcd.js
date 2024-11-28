#!/usr/bin/env node

import _ from 'lodash';
import { whatIsYourName, getNum, getUserAnswer, checkAnswer } from '../src/index.js';

const randomNumbers = () => {
    const num1 = getNum();
    const num2 = getNum();

    console.log(`Question: ${num1} ${num2}`);
    
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

const brainGcd = () => {
    const maxRound = 3;
    let correctAnswer = 0;

    const name = whatIsYourName();

    console.log('Find the greatest common divisor of given numbers.');

    while (correctAnswer < maxRound) {
        const [num1, num2] = randomNumbers();
        const expectedAnswer = getGcd(num1, num2);
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

brainGcd();