#!/usr/bin/env node

import { whatIsYourName, getNum, getUserAnswer, checkAnswer } from '../src/index.js';

const getExpectedAnswer = (num) => {
    const isEven = (num) => num % 2 === 0;
    return isEven(num) ? 'yes' : 'no';
};

const brainEven = () => {
    const name = whatIsYourName();
    const maxRound = 3;
    let correctAnswer = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (correctAnswer < maxRound) {
        const num = getNum();
        console.log(`Question: ${num}`);

        const expectedAnswer = getExpectedAnswer(num);
        const userAnswer = getUserAnswer();
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

brainEven();